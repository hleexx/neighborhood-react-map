import React, {Component} from 'react';

class Place extends Component {
    render() {
        return (
        	<div className ="place">
        		<div className="info">
{/*        			<img src={this.props.location.image_url}></img>*/}
        			<h2>{this.props.name}</h2>
{/*        			<h3>{locations.categories[0].title}</h3>
					<h3>{location.location.display_address[0]}<br/>
					{location.location.display_address[1]}</h3>*/}
        		</div>
        			<div className ="place-marker"></div>
	        </div>
        )
    }
}


export default Place;