import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponents from './CharComponents/CharComponents'

class App extends Component {

  state = {
    text : "",
    textLength : 0
  }

  onChangeHandler = (event) => {
    const string = event.target.value
    this.setState({
      text : string,
      textLength : string.length
    })
  }

  onDeleteHandler = (index) => {
    const string1 = this.state.text
    var arr = string1.split('')
    arr.splice(index,1)
    const final = arr.join('')
    this.setState({
      text: final,
      textLength : final.length
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={(event) => this.onChangeHandler(event)} ></input>
        <p>{this.state.textLength}</p>
        <ValidationComponent length={this.state.textLength}></ValidationComponent>
        {this.state.text.split('').map((char, index) => {
          return <CharComponents 
            char={char}
            click={() => this.onDeleteHandler(index)}
          />
        })}
      </div>
    );
  }
}

export default App;
