var React = require('react');
var ApiUtil = require('../../util/api_util');
var CategoryStore = require('../../stores/category_store');
var BoardStore = require('../../stores/board_store');
var History = require('react-router').History;
var Alert = require('react-bootstrap').Alert;

var BoardForm = React.createClass({
	mixins: [History],

	getInitialState: function() {
		return { title: "", description: "", private: false, category_id: null, categories: CategoryStore.all(), alertVisible: false };
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
		var editSuccessCallback = function() {
			this.props.modalCallback();
		}.bind(this);

		var createSuccessCallback = function(id) {
			this.history.push("/boards/" + id)
		}.bind(this);

		var errorCallback = function(data) {
			var messages = JSON.parse(data);
			this.setState({ errorMessages: messages, alertVisible: true  });
		}.bind(this);

		if (this.editing) {
			ApiUtil.editBoard(this.state, editSuccessCallback, errorCallback);
		} else {
			ApiUtil.createBoard(this.state, createSuccessCallback, errorCallback);
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

	deleteBoard: function(e) {
		e.preventDefault();
		ApiUtil.destroyBoard(this.state.boardId);
		this.history.push("/boards");
	},

	showAlert: function() {
		if (this.state.alertVisible) {
			return (
				<Alert className="alertMessages" bsStyle="danger" onDismiss={this.handleAlertDismiss} dismissAfter={4000}>
					<h4>{this.state.errorMessages}</h4>
				</Alert>
			)
		} else {
			return "";
		}
	},

	handleAlertDismiss: function() {
		this.setState({ alertVisible: false });
	},

	render: function() {

		return (
			<form onSubmit={this.handleSubmit} className="boardForm">
					{this.showAlert()}
					<label >Title</label>
					<input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
				<br/>
					<label>Description</label>
					<textarea onChange={this.handleDescriptionChange} value={this.state.description}></textarea>
				<br/>
				<label>Category</label>
					<select value={this.state.category_id} onChange={this.handleCategoryChange}>
						<option key=""></option>
						{
							this.state.categories.map(function(category) {
								return <option key={category.id} value={category.id}>{category.name}</option>
							})
						}
					</select>
				<br/>
					<label>Private</label>
					<div className="onoffswitch">
					<input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked={this.state.private} onClick={this.handlePrivateChange}/>
						<label className="onoffswitch-label" htmlFor="myonoffswitch">
							<span className="onoffswitch-inner"></span>
							<span className="onoffswitch-switch"></span>
						</label>
					</div>
				<br/>
					<div className="formButtons">
					{this.editing ? <button className="btn" onClick={this.deleteBoard}>Delete</button> : ""}
					<button className="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
					<input className="btn btn-primary" type="submit" value="Submit"/>
					</div>
			</form>
		)
	}

});

module.exports = BoardForm;

