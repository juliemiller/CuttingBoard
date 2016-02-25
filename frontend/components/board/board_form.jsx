var React = require('react');
var ApiUtil = require('../../util/api_util');
var CategoryStore = require('../../stores/category_store');
var BoardStore = require('../../stores/board_store');

var BoardForm = React.createClass({
	getInitialState: function() {
		return { title: "", description: "", private: false, category_id: null, categories: CategoryStore.all() };
	},

	componentDidMount: function() {
		this.categoryListener = CategoryStore.addListener(this._onCategoryChange);
		ApiUtil.fetchCategories();
		var id = this.props.params.boardId;
		if (id) {
			this.setState({ boardId: parseInt(id)});
			var board = BoardStore.find(id)
			this.editing = true;
			this.setState({ title: board.title, description: board.description, private: board.private, category_id: board.category_id });
		}
	},

	componentWillUnmount: function() {
		this.categoryListener.remove();
	},

	_onCategoryChange: function() {
		this.setState({ categories: CategoryStore.all() });
	},

	handleSubmit: function(e) {
		e.preventDefault();
		if (this.editing) {
			ApiUtil.editBoard(this.state);
			this.props.history.push("/boards/" + this.state.boardId);
		} else {
			ApiUtil.createBoard(this.state, function(id) {
				this.props.history.push("/boards/" + id)
			}.bind(this));
			this.resetForm();
		}
	},

	handleTitleChange: function(e) {
		this.setState({ title: e.target.value});
	},

	handleDescriptionChange: function(e) {
		this.setState({ description: e.target.value});
	},

	handleCategoryChange: function(e) {
		this.setState({ category_id: parseInt(e.target.value)});
	},

	handlePrivateChange: function(e) {
		this.setState({ private: e.target.checked});
	},

	handleCancel: function(e) {
		e.preventDefault();
		this.resetForm();
		this.props.history.goBack();
	},

	resetForm: function() {
		this.setState({ title: "", description: "", private: false, category_id: 0 });
	},

	deleteBoard: function() {
		if (confirmation) {
		ApiUtil.destroyBoard(this.state.boardId);
		this.props.history.push("/boards");
		}
	},

	render: function() {

		return (
			<form onSubmit={this.handleSubmit} className="modal-content">
				<label>Title
					<input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
				</label>
				<br/>
				<label>Description
					<input type="text" value={this.state.description} onChange={this.handleDescriptionChange}/>
				</label>
				<br/>
				<label>Category
					<select value={this.state.category_id} onChange={this.handleCategoryChange}>
						<option key="0"></option>
						{
							this.state.categories.map(function(category) {
								return <option key={category.id} value={category.id}>{category.name}</option>
							})
						}
					</select>
				<br/>
				</label>
				<label>Private
					<input type="checkbox" checked={this.state.private} onClick={this.handlePrivateChange}/>

				</label>
				<br/>
				{this.editing ? <button onClick={this.deleteBoard}>Delete</button> : ""}
				<button onClick={this.handleCancel}>Cancel</button>
				<input type="submit" value="Submit"/>
			</form>
		)
	}

});

module.exports = BoardForm;