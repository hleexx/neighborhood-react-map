import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react'

class Map extends Component {
    render() {
        return (
        	<div id="map">
	         	<GoogleMapReact
	          		bootstrapURLKeys={{ key: "AIzaSyB_TOMwP-bLmM-Fz4rfd-BhBZTNa4Y6S-c" }}
	          		defaultCenter={[0,0]}
	          		defaultZoom={0}>
	        	</GoogleMapReact>
	        </div>
        )
    }
}

export default Map;