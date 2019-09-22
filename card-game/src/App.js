import React, { Component } from 'react'
import './App.css'
import CharacterCard from'./CharacterCard';
import WordCard from'./WordCard';

const word = "HELLO";
class App extends Component {
  render() {
    
    return (
      /*<div>
        <h1 class="setcenter">
          
          <button class="button1">    ANIMALS    </button>
          <button class="button2">    FRUIT    </button>
          <button class="button3">    FOOD    </button>
          
        </h1>
      </div>*/
      <div class="setcenter">
        <h1>6010110136 - CardGame</h1>
        
        <WordCard value={word}/>
      </div>
      )
  }
}


export default App;