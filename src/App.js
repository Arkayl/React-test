import React, { Component } from 'react';
import CarList from './Card/CarList.jsx';
import './App.css';

class App extends Component {

  constructor() {
    super();
    console.info('constructor');console.log(React.version);
    this.state = {firstCounter: 0, secondCounter: 0, toUpdate: false, users: []}
  }

  handleClickFirstCounter = () => {
    // let tmpState = this.state;
    // tmpState.firstCounter++;
    // tmpState.toUpdate = true;
    // this.setState(tmpState);
    this.setState((prevState, prevProps) => ({firstCounter: prevState.firstCounter++}));
  }

  handleClickSecondCounter = () => {
    // let tmpState = this.state;
    // tmpState.secondCounter++;
    // tmpState.toUpdate = false;
    // this.setState(tmpState);
    this.setState((prevState, prevProps) => ({secondCounter: prevState.secondCounter++}));
  }

  handleClickCounter = () => {

  }

  componentDidMount() {
    console.info('componentDidMount');

    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data.slice(0, 5) })
    })
    .catch(console.log)
  }

  componentDidUpdate() {
    console.info('componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.info('shouldComponentUpdate current', this.state);
    console.info('shouldComponentUpdate next', nextProps, nextState);

    // return this.state.firstCounter !== nextState.firstCounter;
    // return this.state.toUpdate;
    return true;
  }

  componentWillUnmount() {
    console.info('componentWillUnmount');
  }

  render() {
    console.info('render');
      return (
        <div className="App">
          <CarList users={this.state.users}/>
            {/* <button onClick={this.handleClickFirstCounter}>increment {this.state.firstCounter}</button>
            <button onClick={this.handleClickSecondCounter}>increment {this.state.secondCounter}</button>
            <button onClick={this.handleClickCounter}>increment {this.state.secondCounter}</button> */}
        </div>
    );
  }
}

export default App;
