var React = require('react');
var ApiUtil = require('../util/api_util');

NavBarSearch = React.createClass({
	getInitialState: function() {
		return { inputVal: "" };
	},

	handleInput: function(e) {
		this.setState({ inputVal: e.currentTarget.value });
	},

	selectCategory: function(category) {
		this.setState({ inputVal: category.name, selectedCategory: category.id });
		ApiUtil.fetchFilteredRecipes(category.id);
	},

	matches: function() {
		var matches = [];
		if(this.state.inputVal.length === 0) {
			return [];
		}

		this.props.categories.forEach(function(category) {
			var sub = category.name.slice(0, this.state.inputVal.length);
			if(sub.toLowerCase() === this.state.inputVal.toLowerCase() && category.name.length !== this.state.inputVal.length) {
				matches.push(category);
			}
		}.bind(this));

		return matches;
	},

	handleSubmit: function(e) {
		if (e) {
			e.preventDefault();
		}
		ApiUtil.fetchFilteredRecipes(this.state.selectedCategory);
	},

	render: function() {
		var categories = this.matches().map(function (category) {
			return (
				<li key={category.id} className="searchResultsItem" onClick={function() { this.selectCategory(category) }.bind(this) }>{category.name}</li>
			);
		}.bind(this));

		return (
			<form className="navbar-form navbar-left searchForm" role="search" onSubmit={this.handleSubmit}>
				<input onChange={this.handleInput} type="text" value={this.state.inputVal} className="searchInput"/>
				<button type="submit" className="btn btn-default">Submit</button>
				<ul className="searchResults">
					{categories}
				</ul>
			</form>
		)
	}
});

module.exports = NavBarSearch;
