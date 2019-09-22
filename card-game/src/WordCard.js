import React, { Component } from 'react'
import CharacterCard from'./CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word, // hello
        chars, 
        attempt: 1,
        guess: [],
        completed: false,
        check: false // false to your win
    }
}

export default class WordCard extends Component {

    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
            }else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
                if(this.state.attempt == 3){
                    this.setState({guess: [], check: true})
                    this.setState({guess: [], completed: true})
                }
            }
        }
    }

    render() {
        return (
            <div>
                {
                    Array.from(this.state.chars).map((c, i) => <CharacterCard value={c} key={i}
                    attempt={this.state.attempt}
                    activationHandler={this.activationHandler}/>)
                }

                <h1>Round : {this.state.attempt}</h1>
                <h1>{this.state.completed==!this.state.check? "YOU WON!" : ""}</h1>
                <h1>{this.state.check? "YOU LOSE!" : ""}</h1>
                

            </div>
        );
    }
}


