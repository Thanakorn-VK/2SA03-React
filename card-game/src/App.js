import React, { Component } from 'react'
import './App.css'
import CharacterCard from'./CharacterCard';
import WordCard from'./WordCard';

var categories = ['ONEPIECE', 'NARUTO', 'DORAEMON', 'GINTAMA'];
var randomnum = Math.floor(Math.random()*categories.length)
var word = categories[randomnum];

class App extends Component {
  render() {
    
    return (
      <div class="setcenter">
        <h1>CardGame</h1>

        <WordCard value={word}/>
        <h1> </h1>
        <p>By THANAKORN VIENGKAE 6010110136</p>
      </div> 
      )
  }
}


export default App;