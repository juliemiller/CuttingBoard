var React = require('react');
var CategoryStore = require('../../stores/category_store');
var ApiUtil = require('../../util/api_util');
var CategoryIndexItem = require('./category_index_item');

var CategoryForm = React.createClass({
	getInitialState: function() {
		return { categories: CategoryStore.all(), followedCategories: CategoryStore.followedCategories() }
	},

	componentDidMount: function() {
		this.categoryListener = CategoryStore.addListener(this._onChange);
		ApiUtil.fetchCategories();
		ApiUtil.fetchFollowedCategories();
	},

	componentWillUnmount: function() {
		this.categoryListener.remove();
	},

	_onChange: function() {
		this.setState({ categories: CategoryStore.all(), followedCategories: CategoryStore.followedCategories() });
	},

	updateSelectedItems: function(category) {
		// if (this.state.followedCategories.indexOf(category) === -1) {
		// 	this.state.followedCategories = !this.state.followedCategories[id];
		// } else {
		// 	this.state.followedCategories = true;
		// }
		
	},

	submitForm: function(e) {
		e.preventDefault();
	},

	followedCategory: function(category) {
		if(this.state.followedCategories.indexOf(category) === -1) {
			return false;
		} else {
			return true;
		}
	},

	render: function() {
		
		return (
			<form onSubmit={this.submitForm}>
				<div className="container-fluid">
				{
					this.state.categories.map(function(category) {
						return (
							<div className="col-md-4"  key={category.id}>
								<CategoryIndexItem category={category} selected={this.followedCategory(category)} form={true} selectedCallback={function() {this.updateSelectedItems(category)}.bind(this) } />
							</div>
						)
					}.bind(this))
				}
				</div>
				<input type="submit" value="Submit" className="btn btn-primary categoryFormButton" />
			</form>
		)
	}
});

module.exports = CategoryForm;