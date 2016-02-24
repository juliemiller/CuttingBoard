var React = require('react');

NavBarSearch = React.createClass({
	render: function() {
		return (
			<div>
				<input type="text" placeholder="Search" />
			</div>
		)
	}
});

module.exports = NavBarSearch;