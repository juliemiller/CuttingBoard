var React = require('react');
var ApiUtil = require('../../util/api_util');
var CategoryStore = require('../../stores/category_store');
var BoardStore = require('../../stores/board_store');
var History = require('react-router').History;

var BoardForm = React.createClass({
	mixins: [History],

	getInitialState: function() {
		return { title: "", description: "", private: false, category_id: null, categories: CategoryStore.all() };
	},

	componentDidMount: function() {
		this.categoryListener = CategoryStore.addListener(this._onCategoryChange);
		ApiUtil.fetchCategories();
		var id = this.props.boardId;
		if (id !== "") {
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
			this.props.modalCallback();
		} else {
			ApiUtil.createBoard(this.state, function(id) {
				this.history.push("/boards/" + id)
			}.bind(this));
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
		this.props.modalCallback();
	},

	resetForm: function() {
		this.setState({ title: "", description: "", private: false, category_id: 0 });
	},

	deleteBoard: function() {
		ApiUtil.destroyBoard(this.state.boardId);
		this.history.push("/boards");
	},

	render: function() {

		return (
			<form onSubmit={this.handleSubmit} className="form-inline">
				<div className="form-group">
					<label className="control-label">Title</label>
					<input type="text" className="form-control required" value={this.state.title} onChange={this.handleTitleChange}/>
				</div>
				<br/>
				<div className="form-group">
					<label className="control-label">Description</label>
					<input type="text" className="form-control" value={this.state.description} onChange={this.handleDescriptionChange}/>
				</div>
				<br/>
				<div className="form-group">
					<label className="control-label">Category
						<select className="form-control" value={this.state.category_id} onChange={this.handleCategoryChange}>
							<option key=""></option>
							{
								this.state.categories.map(function(category) {
									return <option key={category.id} value={category.id}>{category.name}</option>
								})
							}
						</select>
					</label>
				</div>
				<br/>
				<div className="form-group">
					<label className="control-label">Private
						<input type="checkbox" className="form-control" checked={this.state.private} onClick={this.handlePrivateChange}/>

					</label>
				</div>
				<br/>
				<div className="btn-toolbar">
					{this.editing ? <button className="btn" onClick={this.deleteBoard}>Delete</button> : ""}
					<button className="btn" onClick={this.handleCancel}>Cancel</button>
					<input className="btn btn-primary" type="submit" value="Submit"/>
				</div>
			</form>
		)
	}

});

module.exports = BoardForm;