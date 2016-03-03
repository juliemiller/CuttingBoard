var React = require('react');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;
var OutsideClick = require('react-onclickoutside');

NavBarSearch = React.createClass({
	mixins: [History, OutsideClick],

	getInitialState: function() {
		return { inputVal: "", showList: false };
	},

	handleInput: function(e) {
		this.setState({ inputVal: e.currentTarget.value});
	},

	selectCategory: function(category) {
		this.setState({ inputVal: category.name, selectedCategory: category.id });
		ApiUtil.fetchFilteredRecipes(category.id);
		this.setState({ inputVal: "", selectedCategory: null, showList: false })
		this.history.push("/");
	},

	handleClickOutside: function() {
		this.setState({ showList: false })
	},

	matches: function() {
		var matches = [];
		if(this.state.inputVal.length === 0 && this.state.showList === false) {
			return [];
		}

		this.props.categories.forEach(function(category) {
			var sub = category.name.slice(0, this.state.inputVal.length);
			if(sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
				matches.push(category);
			} 
		}.bind(this));
		if (matches.length === 1) {
		}
		return matches;
	},

	handleSubmit: function(e, matches) {
		e.preventDefault();	
		ApiUtil.fetchFilteredRecipes(matches[0].id);
		this.history.push("/");
		this.setState({ inputVal: "", selectedCategory: null, showList: false });
	},

	updateShowState: function() {
		this.setState({ showList: true });
	},

	render: function() {
		var matches = this.matches();
		var categories = matches.map(function (category) {
			return (
				<li key={category.id} className="searchResultsItem" onClick={function() { this.selectCategory(category) }.bind(this) }>{category.name}</li>
			);
		}.bind(this));

		return (
			<form className="navbar-form navbar-left searchForm" role="search" onSubmit={function() { this.handleSubmit(event, matches) }.bind(this) }>
				<input onClick={this.updateShowState} onChange={this.handleInput} type="text" value={this.state.inputVal} className="searchInput"/>
				<button type="submit" className="btn btn-default">Submit</button>
				<ul className="searchResults">
					{categories}
				</ul>
			</form>
		)
	}
});

module.exports = NavBarSearch;
