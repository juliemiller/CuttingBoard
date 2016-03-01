var React = require('react');
var CategoryStore = require('../../stores/category_store');
var ApiUtil = require('../../util/api_util');
var CategoryIndexItem = require('./category_index_item');
var Modal = require('react-bootstrap').Modal;
var CategoryForm = require('./category_form');

var CategoryIndex = React.createClass({
	getInitialState: function() {
		return { categories: CategoryStore.followedCategories(), showModal: false }
	},

	componentDidMount: function() {
		this.categoryListener = CategoryStore.addListener(this._onChange);
		ApiUtil.fetchFollowedCategories();
	},

	componentWillUnmount: function() {
		this.categoryListener.remove();
	},

	_onChange: function() {
		this.setState({ categories: CategoryStore.followedCategories() });
	},

	openCategoryForm: function() {
		this.setState({ showModal: true });
	},

	closeCategoryForm: function() {
		this.setState({ showModal: false });
	},


	render: function() {
		return (
			<div className="container-fluid">
				<div className="col-md-2">
					<div className="categoryIndex" onClick={this.openCategoryForm}>
						Follow more topics
					</div>
				</div>
				{
					this.state.categories.map(function(category) {
						return (
							<div className="col-md-2" key={category.id}>
								<CategoryIndexItem  category={category} />
							</div>
						)
					})
				}
				<Modal show={this.state.showModal} onHide={this.closeCategoryForm}>
				<Modal.Header closeButton>
					<Modal.Title>Select Topics to Follow</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CategoryForm />
				</Modal.Body>
			</Modal>
			</div>
		)
		}
});

module.exports = CategoryIndex;