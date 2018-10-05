import React, {Component} from 'react';

class Place extends Component {
    render() {
        return (
        	<div className ="place">
        		{this.props.name}
	        </div>
        )
    }
}


export default Place;