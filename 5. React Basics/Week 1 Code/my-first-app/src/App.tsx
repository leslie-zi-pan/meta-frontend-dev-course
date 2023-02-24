import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonClicker from "./components/ButtonClicker";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Intro1 from "./components/Intro1";
import { AppProps } from "./types/types";
import Card from "./components/Card";

const AppLogo = () => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  )
}

const App = (props: AppProps) => {
  const { title } = props;

  const appHeaderStyles: React.CSSProperties = {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  }

  return (
    <div className="App">
      <header style={appHeaderStyles} className="App-header">
        <Nav></Nav>
        <h1>{title}</h1>
        <Intro1
          introName="Leslie"
          introAge={100}
          programmingLanguage="React TS"
        ></Intro1>
        <AppLogo></AppLogo>
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
        <Card h2={"First Card h2"} h3={"First card h3"}></Card>
        <ButtonClicker initNumber={0}></ButtonClicker>
        <Footer></Footer>
      </header>
    </div>
  );
};

export default App;
