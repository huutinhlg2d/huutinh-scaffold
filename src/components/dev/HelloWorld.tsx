import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Link,
  MessageBar as FluentMessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarGroup as FluentMessageBarGroup,
  MessageBarTitle,
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { SchemaValues, useLevaContext } from "@/leva";
import { removeNotification, RootState } from "@/store/global";

export const HelloWorld: FC = () => {
  const { select, set } = useLevaContext<SchemaValues>();
  const { open = false } = select((state) => ({ open: state.open }));
  const { notifications } = useSelector((state: RootState) => ({ notifications: state.notifications }));
  const dispatch = useDispatch();

  return (
    <Dialog
      open={open}
      onOpenChange={(_, { open }) => {
        set({ open });
      }}
    >
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Dialog title</DialogTitle>

          <DialogContent>
            <Button onClick={() => alert("hello")}>Hello World</Button>

            <MessageBarGroup>
              {notifications.map(({ id, type, description, title }) => (
                <MessageBar key={`${type}-${id}`} intent={type}>
                  <MessageBarBody>
                    <MessageBarTitle>{title}</MessageBarTitle>
                    {description} <Link>Link</Link>
                  </MessageBarBody>

                  <MessageBarActions
                    containerAction={
                      <Button
                        appearance="transparent"
                        aria-label="dismiss"
                        icon={<DismissRegular />}
                        onClick={() => dispatch(removeNotification(id))}
                      />
                    }
                  />
                </MessageBar>
              ))}
            </MessageBarGroup>
          </DialogContent>

          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button appearance="primary">Do Something</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

const MessageBar = styled(FluentMessageBar)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const MessageBarGroup = styled(FluentMessageBarGroup)`
  margin-top: 10px;
`;
