import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    name: "Iuri Pereira Viana",
    counter: 0
  };

  handlePClick = () => {
    const { name } = this.state;
    console.log(`Click for ${name}`);
    this.setState({ name: "Violeta" })
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  render() {
    const { name } = this.state;
    const { counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
          {counter}
        </header>
      </div >
    );
  }
}

export default App;
