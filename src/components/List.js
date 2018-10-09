import React, {Component} from 'react';
import locations from '../data/locations';

class List extends Component {
	render() {
		return (
			<div id="list">
				<input type="text" name="filter">
				</input>
					<ul>
						{locations.map(location => <li>{location.name}</li>)}
					</ul>

			</div>
		)
	}
}

export default List;