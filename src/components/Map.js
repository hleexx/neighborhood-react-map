import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react'
import Place from './Place'

const places = [
	{
		name: "O Ya",
		lat: 42.351859,
		lng: -71.056815
	},
	{
		name: "Gene's Flatbread",
		lat: 42.353671,
		lng: -71.059603
	},
	{
		name: "Row 34",
		lat: 42.349872,
		lng: -71.047243
	},
	{
		name: "Lolita",
		lat: 42.350611,
		lng: -71.051165
	},
	{
		name: "Flour Bakery",
		lat: 42.351556,
		lng: -71.048676
	},	

]

class Map extends Component {
    render() {
        return (
        	<div id="map">
	         	<GoogleMapReact
	          		bootstrapURLKeys={{ key: "AIzaSyB_TOMwP-bLmM-Fz4rfd-BhBZTNa4Y6S-c" }}
	          		center={this.props.center}
	          		zoom={this.props.zoom}>
	   				{places.map(place => <Place name={place.name} lat={place.lat} lng={place.lng}/>)}
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