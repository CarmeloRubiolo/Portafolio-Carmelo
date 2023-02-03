import React from "react";
import Home from "./componentes/Home/Home";
import Header from "./componentes/Header/Header";
import "./App.css"
import AcercaDeMi from "./componentes/AcercaDeMi/AcercaDeMi";
import Skills from "./componentes/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Home />
      <AcercaDeMi />
      <Skills />
    </>
  );
}

export default App;
