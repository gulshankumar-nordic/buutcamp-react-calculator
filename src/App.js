import React, { Component } from 'react';
import './App.css';
import Button from './Components/button';
import Display from './Components/display';


class App extends Component {

  constructor(){
    super();
    this.state= {
      displayValue: 0,
      result:0,
      decimals:",00",
      operator:null,
      expression:'',

    }
    this.onKeyPressed=this.onKeyPressed.bind(this);
  }

  onKeyPressed(text) {
    console.log(text);
    if(text =='c'){
      this.setState({
        expression:''
      })
    }else {
      this.setState({
        expression: this.state.expression + text,
      })
    }
  }

  equalButtonPressed(){
    const e  = eval;
    const result = e(this.state.expression);
    this.setState({expression: result})

  }
  render() {
    return (
    <div className="App">
      <h1>Buutcamp calculator</h1>
        <div className="calculator">
          <Display expression={this.state.expression}></Display>
          <div className="grid-container">
            <Button text="7" onKeyPressed={this.onKeyPressed}/>
            <Button text="8" onKeyPressed={this.onKeyPressed}/>
            <Button text="9" onKeyPressed={this.onKeyPressed}/>
            <Button text="/" onKeyPressed={this.onKeyPressed}/>
            <Button text="4" onKeyPressed={this.onKeyPressed}/>
            <Button text="5" onKeyPressed={this.onKeyPressed}/>
            <Button text="6" onKeyPressed={this.onKeyPressed}/>
            <Button text="-" onKeyPressed={this.onKeyPressed}/>
            <Button text="1" onKeyPressed={this.onKeyPressed}/>
            <Button text="2" onKeyPressed={this.onKeyPressed}/>
            <Button text="3" onKeyPressed={this.onKeyPressed}/>
            <Button text="+" onKeyPressed={this.onKeyPressed}/>
            <Button text="c" onKeyPressed={this.onKeyPressed}/>
            <Button text="0" onKeyPressed={this.onKeyPressed}/>
            <Button text="," onKeyPressed={this.onKeyPressed}/>
            <Button text="=" onKeyPressed={this.equalButtonPressed.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
