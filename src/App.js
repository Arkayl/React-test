import React, { Component } from 'react';
import CarList from './Card/CarList.jsx';
import './App.css';

class App extends Component {

  constructor() {
    super();
    console.info('constructor');console.log(React.version);
    this.state = {firstCounter: 0, secondCounter: 0, toUpdate: false, users: [], filteredUsers: [], filter: ''}
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
      this.setState({ users: data.slice(0, 5), filteredUsers: data.slice(0, 5) })
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

  handleChange = (event) => {
    console.log(event)
    if (!!event.target) {
      const filterValue = event.target.value;
      this.setState(() => ({
        filter: filterValue
      // }));
      ,
      filteredUsers: this.state.users.filter(user => {
          if (!filterValue) {
            return true;
          }
          else {
            return user.name.toLowerCase().indexOf(filterValue) !== -1;
          }
        })
      }));
    }
  }

  render() {
    console.info('render');
      return (
        <div className="App">
          <input
          type="text"
          value={this.state.filter}
          onChange={this.handleChange}
          />
          <p>{this.state.filter}</p>
          <CarList users={this.state.filteredUsers}/>
            {/* <button onClick={this.handleClickFirstCounter}>increment {this.state.firstCounter}</button>
            <button onClick={this.handleClickSecondCounter}>increment {this.state.secondCounter}</button>
            <button onClick={this.handleClickCounter}>increment {this.state.secondCounter}</button> */}
        </div>
    );
  }
}

export default App;
