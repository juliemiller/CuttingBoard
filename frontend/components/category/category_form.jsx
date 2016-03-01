var React = require('react');
var CategoryStore = require('../../stores/category_store');
var ApiUtil = require('../../util/api_util');
var CategoryIndexItem = require('./category_index_item');

var CategoryForm = React.createClass({
	getInitialState: function() {
		return { categories: CategoryStore.all() }
	},

	componentDidMount: function() {
		this.categoryListener = CategoryStore.addListener(this._onChange);
		ApiUtil.fetchCategories();
	},

	componentWillUnmount: function() {
		this.categoryListener.remove();
	},

	_onChange: function() {
		this.setState({ categories: CategoryStore.all() });
	},

	render: function() {
		return (
			<form>
				<div className="container-fluid">
				{
					this.state.categories.map(function(category) {
						return (
							<div className="col-md-4"  key={category.id}>
								<CategoryIndexItem category={category} />
							</div>
						)
					})
				}
				</div>
			</form>
		)
	}
});

module.exports = CategoryForm;