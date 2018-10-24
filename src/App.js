import React, { Component } from 'react';
import './App.css';
import './responsive.css'
import Map from './components/Map.js';
import List from './components/List.js';
import locations from './data/locations.js';
import { getListYelpData } from './services/Yelp.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            yelpLocationsData: [],
            query: "",
            isOpen: false,
            selectedLocation: "",
        }
    }

    componentDidMount() {
        Promise.all(locations.map(location => getListYelpData(location.id)))
        .then(locations => {
            this.setState({yelpLocationsData: locations});
            this.setState({locations: locations});
        })
        .catch(err => {
            alert("Could not load locations from Yelp");
        });
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

    updateLocation = (locationName) => {
        this.setState({
            selectedLocation: locationName,
        })
    }

    /* Once filter is updated, we want to change filter in App.js 
    and in App.js we want to change the value of locations in the filter */

    updateQuery = (query) => {
        this.setState({
            query: query,
            locations: this.state.yelpLocationsData.filter(location => location.name.toLowerCase().startsWith(query.toLowerCase())) 
        })
    }

    render() {
        return (
            <div>
                <div className={this.listClosedClass() + " header"}>
                    <h1>
                        <button aria-expanded={this.state.isOpen} 
                            aria-haspopup="true"
                            role="menu"
                            onClick={() => this.toggleMenu()}>&#9776;</button>
                        Neighborhood Map
                    </h1>
                </div>
                <div className="App flex-container">
                    <List className={this.listClosedClass()} 
                        locations={this.state.locations} 
                        query={this.state.query} 
                        handleUpdateQuery={this.updateQuery}
                        handleSelectedLocation={this.updateLocation}/>
                    <Map className={this.listClosedClass()} 
                        locations={this.state.locations}
                        handleSelectedLocation={this.updateLocation}
                        selectedLocation={this.state.selectedLocation}/>
                </div>
            </div>
        );
    }
}

export default App;
