import React, { Component } from 'react';
import { getListYelpData } from '../services/Yelp.js';

class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			locations: [],
		}

		Promise.all(this.props.locations.map(location => getListYelpData(location.id)))
		.then(locations => this.setState({locations}))
	}

	listItem (location) {
		const yelpData = getListYelpData(location.id)
		return (
			<li key={yelpData.id}>
				<img src={yelpData.image_url}></img>
				<h2>{yelpData.name}</h2>
				{/*<h3>{yelpData.categories[0].title}</h3>
				<h3>{yelpData.location.display_address[0]}<br/>
				{yelpData.location.display_address[1]}</h3>
				<h3>{yelpData.phone}</h3>
				<h3>{yelpData.is_open_now}</h3>*/}
			</li>
		);
	}

	render() {
		return (
			<div className={this.props.className + " list"}>
				<input type="text" name="filter" value={this.props.query}
					onChange={(event) => this.props.handleUpdateQuery(event.target.value)} />
				<ul>
					{this.props.locations.map(location => this.listItem(location))}
				</ul>

			</div>
		)
	}
}

export default List;