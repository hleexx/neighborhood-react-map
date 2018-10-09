import React, {Component} from 'react';

class List extends Component {

	render() {
		return (
			<div id="list">
				<input type="text" name="filter" value={this.props.query}
					onChange={(event) => this.props.handleUpdateQuery(event.target.value)} />
				<ul>
					{this.props.locations.map(location => <li key={location.name}>{location.name}</li>)}
				</ul>

			</div>
		)
	}
}

export default List;