import React, { Component } from 'react';
import { getListYelpData } from '../services/Yelp.js';

class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			locations: [],
		}
	}

	componentDidMount() {
		Promise.all(this.props.locations.map(location => getListYelpData(location.id)))
		.then(locations => this.setState({locations}))
	}

	listItem (location) {
		return (
			<li key={location.id}>
				<img src={location.image_url}></img>
				<h2>{location.name}</h2>
				<h3>{location.categories[0].title}</h3>
				<h3>{location.location.display_address[0]}<br/>
				{location.location.display_address[1]}</h3>
				<h3>{location.phone}</h3>
				<h3>{location.is_open_now}</h3>
			</li>
		);
	}

	render() {
		return (
			<div className={this.props.className + " list"}>
				<input type="text" name="filter" value={this.props.query}
					onChange={(event) => this.props.handleUpdateQuery(event.target.value)} />
				<ul>
					{this.state.locations.map(location => this.listItem(location))}
				</ul>

			</div>
		)
	}
}

export default List;