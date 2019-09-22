import React, { Component } from 'react'
import './App.css'
import CharacterCard from'./CharacterCard';
import WordCard from'./WordCard';

const word = "HELLO";
class App extends Component {
  render() {
    
    return (
      <div class="setcenter">
        <h1>6010110136 - CardGame</h1>
        <WordCard value={word}/>
        <h1> </h1>
        <h4>By THANAKORN VIENGKAE</h4>
      </div>
      )
  }
}


export default App;