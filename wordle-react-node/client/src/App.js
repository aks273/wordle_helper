import React, { Component } from "react";
import './App.css';

// TODO: move to a strings.js file
const fixedLettersInstruction = "Fill in the green letters in your current game \
leaving the non-green letters blank.";

const yellowLettersInstruction = "Fill in the yellow letters, in any order."

const previousGuessesInstruction = "Fill in your previous guesses, leaving the \
other boxes blank."


class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.message }))
      .catch(err => console.log(err));
  }
  
  callBackendAPI = async () => {
    const params = {
      greenLetters: ["b", "a", "", "", ""],
      yellowLetters: "c",
      greyLetters: "im",
    }

    // TODO: might be better to send the "previous guesses" and infer
    // the grey letters & positions of yellow letters from that

    // This works but converts our green letters array into a string
    const queryString = new URLSearchParams(params);
    const response = await fetch(`/api?${queryString}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Akhil's Wordle Helper Tool!</h1>
        </header>
        <div className="App-content-row">
          <div className="column">
            <h1>Fixed Letters</h1>
            <h2>{fixedLettersInstruction}</h2>
          </div>
          <div className="column">
          <h1>Yellow Letters</h1>
            <h2>{yellowLettersInstruction}</h2>
          </div>
          <div className="column">
          <h1>Previous Guesses</h1>
            <h2>{previousGuessesInstruction}</h2>
          </div>
        </div>
{/*         
          Text fields split out into a separate row so they are
          all vertically alligned with each other. 
        */}
        <div className="App-content-row">
          <div className="column">
{/*             
            TODO: split this out into a reusable 5 textfield Component.
            This is valid because we can only have up to 5 green letters,
            up to 5 yellow letters, and up to 5 previous guesses (the 
            sixth is the final guess).
            Neat!
            */}
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>
          </div>
          <div className="column">
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>          </div>
          <div className="column">
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>
            <input type="text" className="fixed-input"></input>
          </div>
        </div>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App
