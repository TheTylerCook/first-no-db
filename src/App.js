import React, { Component } from 'react';
import './App.css';
import Weatherdisplay from './components/weatherdisplay.js';
import List from './components/List.js';
// import Button from './button.js';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };



  }


  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }




  render() {
    console.log(this.state)

    return (
      <div>
        <header className="header">
          <h1>Check The Forcast For Today</h1>
        </header>

        <Weatherdisplay />
        <div className="todoList">
          <form className="addItem" onSubmit={this.onSubmit}>
            <button className="todoButton">Todo List</button>
            <input className="todoInput" value={this.state.term} onChange={this.onChange} />
            <List className="itemText" items={this.state.items} />
          </form>
        </div>


      </div>




    )
  }

}

export default App;


