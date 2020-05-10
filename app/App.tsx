import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Main from "./views/Main";

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}
