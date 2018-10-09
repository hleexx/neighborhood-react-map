import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Place from './Place';
import locations from '../data/locations';

class Map extends Component {
    render() {
        return (
        	<div id="map">
	         	<GoogleMapReact
	          		bootstrapURLKeys={{ key: "AIzaSyB_TOMwP-bLmM-Fz4rfd-BhBZTNa4Y6S-c" }}
	          		center={this.props.center}
	          		zoom={this.props.zoom}>
	   				{locations.map(location => <Place name={location.name} lat={location.lat} lng={location.lng}/>)}
	        	</GoogleMapReact>
	        </div>
        )
    }
}

Map.defaultProps = {
	center: [42.3487589,-71.0515148],
	zoom: 16
}

export default Map;