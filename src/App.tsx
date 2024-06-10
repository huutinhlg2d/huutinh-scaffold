import "./App.scss";

import { Canvas } from "@react-three/fiber";
import { LevaPanel, LevaStoreProvider, useControls, useCreateStore } from "leva";
import { Suspense } from "react";
import styled from "styled-components";

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
          {/* TODO: add something here */}
        </Container>
      </LevaStoreProvider>
    </>
  );
}

const Container = styled.div<{ $hideCursor?: boolean }>`
  background-color: #111111;
  ${({ $hideCursor: hideCursor }) => (hideCursor ? "cursor: none;" : "")}
`;

export default App;
