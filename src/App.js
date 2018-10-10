import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import List from './components/List.js';
import locations from './data/locations.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: locations,
            query: "",
            isOpen: false,
        }
    }

    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    listClosedClass() {
        if (this.state.isOpen) {
            return ""
        } else {
            return "list-closed"
        }
    }

    /* Once filter is updated, we want to change filter in App.js 
    and in App.js we want to change the value of locations in the filter */

    updateQuery = (query) => {
        this.setState({
            query: query,
            locations: locations.filter(location => location.name.toLowerCase().startsWith(query.toLowerCase())) 
        })
    }

    render() {
        return (
            <div>
                <div className={this.listClosedClass() + " header"}>
                    <h1>
                        <button onClick={() => this.toggleMenu()}>&#9776;</button>
                        Neighborhood Map
                    </h1>
                </div>
                <div className="App flex-container">
                    <List className={this.listClosedClass()} locations={this.state.locations} query={this.state.query} handleUpdateQuery={this.updateQuery}/>
                    <Map className={this.listClosedClass()} locations={this.state.locations}/>
                </div>
            </div>
        );
    }
}

export default App;
