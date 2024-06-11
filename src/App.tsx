import "./App.scss";

import { FluentProvider, Portal, PortalMountNodeProvider, webDarkTheme } from "@fluentui/react-components";
import { LevaPanel, LevaStoreProvider, useControls, useCreateStore } from "leva";
import { useState } from "react";
import styled from "styled-components";

import { HelloWorld } from "./components/dev/HelloWorld";
import { schema } from "./leva";
import { useAppSelector } from "./store/global/hooks";
import { selectHidden } from "./store/global/slice/mouseSlice";

function App() {
  const mouseHidden = useAppSelector(selectHidden);
  const store = useCreateStore();
  useControls(schema, { store });

  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  return (
    <>
      <Portal>
        <LevaPanel
          titleBar
          store={store}
          theme={{
            sizes: {
              rootWidth: "350px",
              controlWidth: "150px",
            },
          }}
        />
      </Portal>
      <LevaStoreProvider store={store}>
        <FluentProvider theme={webDarkTheme}>
          <PortalMountNodeProvider value={portalElement!}>
            <Container $hideCursor={mouseHidden}>
              <HelloWorld />
            </Container>
          </PortalMountNodeProvider>

          <div ref={setPortalElement}></div>
        </FluentProvider>
      </LevaStoreProvider>
    </>
  );
}

const Container = styled.div<{ $hideCursor?: boolean }>`
  ${({ $hideCursor: hideCursor }) => (hideCursor ? "cursor: none;" : "")}
`;

export default App;
