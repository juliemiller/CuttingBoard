var React = require('react');
var CategoryStore = require('../../stores/category_store');
var ApiUtil = require('../../util/api_util');
var CategoryIndexItem = require('./category_index_item');
var Alert = require('react-bootstrap').Alert;

var CategoryForm = React.createClass({
	getInitialState: function() {
		return { categories: CategoryStore.all(), followedCategories: CategoryStore.followedCategories(), alertVisible: false }
	},

	componentDidMount: function() {
		this.followedDif = [];
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

	updateSelectedItems: function(categoryId) {
		var idx = this.followedDif.indexOf(categoryId);
		if ( idx === -1) {
			this.followedDif.push(categoryId);
		} else {
			this.followedDif.splice(idx, 1);
		}
	},

		showAlert: function() {
		if (this.state.alertVisible) {
			return (
				<Alert className="alertMessages" bsStyle="danger" onDismiss={this.handleAlertDismiss} dismissAfter={4000}>
					<h4>Must choose at least one category</h4>
				</Alert>
			)
		} else {
			return "";
		}
	},

	handleAlertDismiss: function() {
		this.setState({ alertVisible: false });
	},

	submitForm: function(e) {
		e.preventDefault();
		var toDelete = [];
		var toCreate = [];
		var that = this;
		this.followedDif.forEach(function(id) {
			that.state.followedCategories.forEach(function(category) {
				if( category.id === id) {
					toDelete.push(id);
				} 
			})
			if (toDelete.indexOf(id) === -1) {
				toCreate.push(id);
			}
		});

		if (toDelete.length === this.state.followedCategories.length && this.state.followedCategories.length !== 0) {
			this.setState({ alertVisible: true });
		} else {

			if (toCreate.length > 0) {
				ApiUtil.createCategoryFollows(toCreate.join(", "));
			}
			if (toDelete.length > 0) {
				ApiUtil.deleteCategoryFollows(toDelete.join(", "));
			}
			this.props.modalCallback();
		}
	},

	followedCategory: function(category) {
		var followed = false;

		this.state.followedCategories.forEach(function(followedCategory) {
			if(followedCategory.id === category.id) {
				followed = true;
			} 
		});
		return followed;
	},

	render: function() {

		return (
			<form onSubmit={this.submitForm}>
			{this.showAlert()}
				<div className="container-fluid">
				{
					this.state.categories.map(function(category) {
						return (
							<div className="col-md-4"  key={category.id}>
								<CategoryIndexItem category={category} selected={this.followedCategory(category)} form={true} selectedCallback={function() {this.updateSelectedItems(category.id)}.bind(this) } />
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