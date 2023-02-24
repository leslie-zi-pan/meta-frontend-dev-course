import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonClicker from "./components/ButtonClicker";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Intro1 from "./components/Intro1";
import { AppProps } from "./types/types";

const App = (props: AppProps) => {
  const { title } = props;

  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <h1>{title}</h1>
        <Intro1></Intro1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonClicker initNumber={0}></ButtonClicker>
        <Footer></Footer>
      </header>
    </div>
  );
};

export default App;
