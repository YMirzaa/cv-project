import React, { Component } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import './styles/allStyle.css';

class App extends Component {

  render(){
    return (
      <div>
        <Header/>
        <MainContent/>
      </div>
    );
  }
}

export default App;
