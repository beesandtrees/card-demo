import React, { Component } from 'react';
import './App.css';

import { CardList, SearchBox, Table } from './components';

const DataView = ({ cards, filteredData }) => {
  if (cards) {
    return <CardList data={filteredData} />;
  } else {
    return <Table data={filteredData} />;
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredData: [],
      filter: null,
      order: null,
      data: [],
      viewCards: true
    };
  }

  componentDidMount() {
    fetch(
      'https://my-json-server.typicode.com/beesandtrees/typicode-json/rooms'
    )
      .then(res => res.json())
      .then(rooms =>
        this.setState({
          filteredData: rooms,
          data: rooms,
          filter: null,
          order: null
        })
      )
      .catch(err => console.log(err));
  }

  filterByString = (e, string) => {
    const filteredData = this.state.data.filter(m =>
      m[string].toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({ filteredData, filter: 'tail_no' });
  };

  filterByStatus = status => {
    const filteredData = this.state.data.filter(
      m => m.status === status || m.assignment.status === status
    );

    this.setState({ filteredData, filter: status });
  };

  filterWatching = () => {
    const filteredData = this.state.data.filter(m => m.watching);

    this.setState({ filteredData, filter: 'Watching' });
  };

  orderByStatus = (e, order) => {
    const filteredData = this.state.data
      .slice(0)
      .sort((m, n) => m.status - n.status);

    this.setState({ filteredData, order });
  };

  toggleView = () => this.setState({ viewCards: !this.state.viewCards });

  resetData = () => {
    this.setState({ filteredData: this.state.data, order: null, filter: null });
  };

  render() {
    const { filteredData, filter, viewCards } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Issue Tracker</h1>
        </header>
        <main>
          <div className="filter-bar">
            <nav>
              <section>
                <h3>Search</h3>
                <SearchBox
                  handleChange={e => this.filterByString(e, 'tail_no')}
                  placeholder="Search By Name"
                />
              </section>
              <section>
                <h3>Filter</h3>
                <button
                  className={filter === null ? 'button active' : 'button'}
                  onClick={this.resetData}
                >
                  All
                </button>
                <button
                  className={
                    filter === 'Unassigned' ? 'button active' : 'button'
                  }
                  onClick={() => this.filterByStatus('Unassigned')}
                >
                  Unassigned
                </button>
                <button
                  className={
                    filter === 'In Progress' ? 'button active' : 'button'
                  }
                  onClick={() => this.filterByStatus('In Progress')}
                >
                  In Progress
                </button>
                <button
                  className={filter === 'Watching' ? 'button active' : 'button'}
                  onClick={this.filterWatching}
                >
                  Watching
                </button>
                <button
                  className={
                    filter === 'Read-Only' ? 'button active' : 'button'
                  }
                  onClick={() => this.filterByStatus('Read-Only')}
                >
                  Sabre
                </button>
              </section>
              <section>
                <h3>Filter Location</h3>
                <SearchBox
                  handleChange={e => this.filterByString(e, 'location')}
                  placeholder="Search By Location"
                />
              </section>
            </nav>
          </div>
          <div className="cards">
            <div className="toggle">
              <button
                className={viewCards ? 'button active' : 'button'}
                onClick={this.toggleView}
              >
                Card View
              </button>
              <button
                className={!viewCards ? 'button active' : 'button'}
                onClick={this.toggleView}
              >
                Table View
              </button>
            </div>
            <DataView cards={viewCards} filteredData={filteredData} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
