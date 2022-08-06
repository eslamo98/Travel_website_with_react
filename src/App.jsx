import React, { Component } from 'react';
import "./App.css"
import {Navbar, Main, Adventure, Outdoor, Features, Packages, Reviews, Orders, Posts, Subscribe, Partners, Footer} from "./components";

function App () {

    const [windowSize, setWindowSize] = React.useState(window.innerWidth);
    return (
      <div className="App">

        <Navbar windowSize={windowSize} setWindowSize={setWindowSize}/>
        <Main />
        <Adventure windowSize={windowSize}/>
        <Outdoor windowSize={windowSize}/>
        <Features windowSize={windowSize}/>
        <Packages windowSize={windowSize}/>
        <Reviews windowSize={windowSize}/>
        <Orders windowSize={windowSize}/>
        <Posts windowSize={windowSize}/>
        <Subscribe />
        <Partners windowSize={windowSize}/>
        <Footer windowSize={windowSize}/>

      </div>
    );

  }

export default App;
