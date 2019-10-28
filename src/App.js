import React, { Component } from 'react';
import './App.css';

import { CardList, SearchBox } from './components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredMonsters: [],
      monsters: []
    };
  }

  componentDidMount() {
    fetch(
      'https://my-json-server.typicode.com/beesandtrees/typicode-json/users'
    )
      .then(res => res.json())
      .then(users =>
        this.setState({
          filteredMonsters: users,
          monsters: users,
          order: null
        })
      )
      .catch(err => console.log(err));
  }

  filterByName = e => {
    const filteredMonsters = this.state.monsters.filter(m =>
      m.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({ filteredMonsters });
  };

  filterByStatus = e => {
    const status = ['unassigned', 'in progress', 'complete'];
    const filteredMonsters = this.state.monsters.filter(m =>
      status[m.status].includes(e.target.value.toLowerCase())
    );

    this.setState({ filteredMonsters });
  };

  orderByStatus = e => {
    const filteredMonsters = this.state.monsters
      .slice(0)
      .sort((m, n) => m.status - n.status);

    this.setState({ filteredMonsters, order: 'up' });
  };

  orderByReverseStatus = e => {
    const filteredMonsters = this.state.monsters
      .slice(0)
      .sort((m, n) => n.status - m.status);

    this.setState({ filteredMonsters, order: 'down' });
  };

  resetMonsters = () => {
    this.setState({ filteredMonsters: this.state.monsters, order: null });
  };

  render() {
    const { filteredMonsters, order } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Monster Issues</h1>
        </header>
        <nav>
          <span className="label">Order by Status</span>
          <div className="toggle">
            <button
              className={order === 'up' ? 'button active' : 'button'}
              onClick={this.orderByStatus}
            >
              ▲
            </button>
            <button
              className={order === 'down' ? 'button active' : 'button'}
              onClick={this.orderByReverseStatus}
            >
              ▼
            </button>
            <button
              className={order === null ? 'button active' : 'button'}
              onClick={this.resetMonsters}
            >
              ✖
            </button>
          </div>

          <SearchBox
            handleChange={this.filterByName}
            placeholder="Search By Name"
          />

          <SearchBox
            handleChange={this.filterByStatus}
            placeholder="Search By Status"
          />
          <button className="button" onClick={this.resetMonsters}>
            Reset
          </button>
        </nav>
        <main>
          <CardList monsters={filteredMonsters} />
        </main>
      </div>
    );
  }
}

export default App;
