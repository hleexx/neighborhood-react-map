import React, {Component} from 'react';

class Place extends Component {
    render() {
        return (
        	<div className ={"place " + this.props.selectedClass} onClick={event => this.props.handleSelectedLocation(this.props.location.name)}>
        		<div className="info">
        			<div className="info-image">
        				<img src={this.props.location.image_url}></img>
        			</div>
        			<div className="info-text">
        				<h1>{this.props.location.name}</h1>
						<h2>{this.props.location.location.display_address[0]}<br/>
						{this.props.location.location.display_address[1]}</h2>
        			</div>
        		</div>
        		<div className ="place-marker"></div>
	        </div>
        )
    }
}


export default Place;