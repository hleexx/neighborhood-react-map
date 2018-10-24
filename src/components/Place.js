import React, {Component} from 'react';

class Place extends Component {
    render() {
        return (
        	<div className ={"place " + this.props.selectedClass} onKeyUp={event => event.keyCode === 13 && this.props.handleSelectedLocation(this.props.location.name)}
                onClick={event => this.props.handleSelectedLocation(this.props.location.name)}>
        		<div className="info">
        			<div className="info-image">
        				<img src={this.props.location.image_url} role="img" alt={this.props.location.name + " image"}></img>
        			</div>
        			<div className="info-text">
        				<h1 className="restaurant-name">{this.props.location.name}</h1>
						<h2 className="restaurant address">{this.props.location.location.display_address[0]}<br/>
						{this.props.location.location.display_address[1]}</h2>
        			</div>
        		</div>
        		<div className ="place-marker" tabIndex="0" alt={this.props.location.name + " map marker"}></div>
	        </div>
        )
    }
}


export default Place;