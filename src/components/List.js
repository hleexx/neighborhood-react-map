import React, { Component } from 'react';

class List extends Component {

	listItem (location) {
		return (
			<li key={location.id} onClick={event => this.props.handleSelectedLocation(location.name)}>
				<img src={location.image_url} role="img" alt={location.name + " image"}></img>
				<h2 className="restaurant-name" tabindex="0">{location.name}</h2>
				<h3 className="restaurant-categories">{location.categories[0].title}</h3>
				<h3 className="restaurant address">{location.location.display_address[0]}<br/>
				{location.location.display_address[1]}</h3>
				<h3 className="restaurant phone number">{location.phone}</h3>
				<h3 className="restaurant availibility">{location.is_open_now}</h3><br/>
			</li>
		);
	}

	render() {
		return (
			<div className={this.props.className + " list"}>
				<h3 className="filter-text">Filter by Restaurant Name:</h3>
				<input type="text" name="filter" value={this.props.query}
					onChange={(event) => this.props.handleUpdateQuery(event.target.value)}
					aria-label="filter"
					role="search" />
				<ul>
					{this.props.locations.map(location => this.listItem(location))}
				</ul>

			</div>
		)
	}
}

export default List;