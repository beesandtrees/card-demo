import React, { Component } from 'react';
import './App.css';

import { CardList, SearchBox } from './components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch(
      'https://my-json-server.typicode.com/beesandtrees/typicode-json/users'
    )
      .then(res => res.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      )
      .catch(err => console.log(err));
  }

  setSearchValue = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(m =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <header>
          <h1>Monster Issues</h1>
        </header>
        <nav>
          <SearchBox
            handleChange={this.setSearchValue}
            placeholder="Search Monsters"
          />
        </nav>
        <main>
          <CardList monsters={filteredMonsters} />
        </main>
      </div>
    );
  }
}

export default App;
