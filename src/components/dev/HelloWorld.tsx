import {
    Button,
    Dialog,
    DialogActions,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger,
    Field,
} from "@fluentui/react-components";
import { FC } from "react";

import { SchemaValues, useLevaContext } from "@/leva";

export const HelloWorld: FC = () => {
    const { select, set } = useLevaContext<SchemaValues>();
    const { open = false } = select((state) => ({ open: state.open }));

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
                        <Field>GUID</Field>
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
