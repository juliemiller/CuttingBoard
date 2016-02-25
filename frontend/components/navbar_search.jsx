var React = require('react');

NavBarSearch = React.createClass({
	render: function() {
		return (
			<input type="text" placeholder="Search" />
		)
	}
});

module.exports = NavBarSearch;