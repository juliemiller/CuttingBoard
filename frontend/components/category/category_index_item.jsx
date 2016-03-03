var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('../../util/api_util');

var CategoryIndexItem = React.createClass({
	mixins: [History],

	getInitialState: function() {
		this.selected = this.props.selected;
		return { classes: "categoryIndex" }
	},

	componentDidMount: function() {
		this.selected = this.props.selected;
		if (this.selected) {
			this.setState({ classes: "categoryIndex selectedCategory"})
		}
	},

	handleClick: function(e) {
		e.preventDefault();
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
		ApiUtil.fetchFilteredRecipes(this.props.category.id);
		this.history.push("/");
	},

	render: function() {
		var pic_url= {backgroundImage: 'url(' + this.props.category.image_url + ')'};
		return (
				<div className={this.state.classes} onClick={this.handleClick} style={pic_url}>
				{this.props.category.name}		
				</div>
		)
	}
});

module.exports = CategoryIndexItem;

// {this.props.category.image_url}