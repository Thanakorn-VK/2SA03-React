import React, { Component } from 'react'
import './App.css'
import CharacterCard from'./CharacterCard';
import WordCard from'./WordCard';

var categories = ['ONEPIECE', 'NARUTO', 'DORAEMON', 'GINTAMA'];
var randomnum = Math.floor(Math.random()*categories.length)
var word = categories[randomnum];

if(randomnum == 0) {
  var image = "ONEPIECE.jpg";
}
if(randomnum == 1) {
  var image = "NARUTO.jpg";
}
if(randomnum == 2) {
  var image = "DORAEMON.jpg";
}
if(randomnum == 3) {
  var image = "GINTAMA.jpg";
}


class App extends Component {
  render() {
    
    return (
      <div class="setcenter">
        <h1>CardGame</h1>
        <img src = {image}></img>
        <WordCard value={word}/>
        <p>By THANAKORN VIENGKAE 6010110136</p>
      </div> 
      )
  }
}


export default App;