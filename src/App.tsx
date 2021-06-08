import React from "react";
import { Container } from "@chakra-ui/layout";
import { Household } from "./components/Household";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container padding="8">
        <Household />
      </Container>
    </div>
  );
}

export default App;
