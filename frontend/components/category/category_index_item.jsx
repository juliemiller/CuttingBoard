var React = require('react');
var History = require('react-router').History;

var CategoryIndexItem = React.createClass({
	mixins: [History],

	getInitialState: function() {
		this.selected = false;
		return { classes: "categoryIndex" }
	},

	handleClick: function() {
		if (this.props.form === true) {
			this.toggleSelect();
		} else {
			this.openCategoryPages();
		}
	},

	toggleSelect: function() {
		this.selected = !this.selected;
		this.props.selectedCallback();

		if (this.selected) {
			this.setState({ classes: "categoryIndex selectedCategory"});
		}
		else {
			this.setState({ classes: "categoryIndex"});
		}

	},

	openCategoryPages: function() {
		this.history.push("/")
	},

	render: function() {
		return (
				<div className={this.state.classes} onClick={this.handleClick}>
				{this.props.category.name}		
				</div>
		)
	}
});

module.exports = CategoryIndexItem;