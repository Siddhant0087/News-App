import './App.css';

import React, { Component } from 'react'
import Navbar from './Componenets/Navbar';
import News from './Componenets/News';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

