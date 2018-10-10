import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Place from './Place';

class Map extends Component {
    render() {
        return (
        	<div className={this.props.className + " map"}>
	         	<GoogleMapReact
	          		bootstrapURLKeys={{ key: "AIzaSyB_TOMwP-bLmM-Fz4rfd-BhBZTNa4Y6S-c" }}
	          		center={this.props.center}
	          		zoom={this.props.zoom}>
	   				{this.props.locations.map(location => <Place key={location.name} name={location.name} lat={location.lat} lng={location.lng}/>)}
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