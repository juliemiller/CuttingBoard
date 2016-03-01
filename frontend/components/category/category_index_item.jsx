var React = require('react');
var History = require('react-router').History;

var CategoryIndexItem = React.createClass({
	mixins: [History],

	openCategoryPages: function() {
		this.history.push("/")
	},

	render: function() {
		return (
				<div className="categoryIndex" onClick={this.openCategoryPages}>
				{this.props.category.name}		
				</div>
		)
	}
});

module.exports = CategoryIndexItem;