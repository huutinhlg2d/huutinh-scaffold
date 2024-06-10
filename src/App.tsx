import "./App.scss";

import { LevaPanel, LevaStoreProvider, useControls, useCreateStore } from "leva";
import { Suspense } from "react";
import styled from "styled-components";

import { FluentProvider, webDarkTheme } from "@fluentui/react-components";
import { HelloWorld } from "./components/dev/HelloWorld";
import { schema } from "./leva";
import { useAppSelector } from "./store/global/hooks";
import { selectHidden } from "./store/global/slice/mouseSlice";

function App() {
  const mouseHidden = useAppSelector(selectHidden);
  const store = useCreateStore();
  useControls(schema, { store });

  return (
    <>
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
      <LevaStoreProvider store={store}>
        <Container>
          <span>
            <Suspense></Suspense>
          </span>
        </Container>
        <Container $hideCursor={mouseHidden}>
          <FluentProvider theme={webDarkTheme}>
            <HelloWorld />
          </FluentProvider>
        </Container>
      </LevaStoreProvider>
    </>
  );
}

const Container = styled.div<{ $hideCursor?: boolean }>`
  ${({ $hideCursor: hideCursor }) => (hideCursor ? "cursor: none;" : "")}
`;

export default App;
