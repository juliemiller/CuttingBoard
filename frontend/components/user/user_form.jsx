var React = require('react');
var ApiUtil = require('../../util/api_util');

var UserForm = React.createClass({
	getInitialState: function() {
		return { };
	},

	componentDidMount: function() {
		// ApiUtil.fetchCurrentUser();
		// UserStore.getCurrentUser();
		this.setState({ title: board.title, description: board.description, private: board.private, category_id: board.category_id });
	},

	componentWillUnmount: function() {
	},

	handleSubmit: function(e) {
		e.preventDefault();
		ApiUtil.updateProfile(this.state);
		this.props.history.push("/boards/");
	},

	handleFirstNameChange: function(e) {
		this.setState({ firstName: e.target.value});
	},

	handleLastNameChange: function(e) {
		this.setState({ lastName: e.target.value});
	},

	handleDescriptionChange: function(e) {
		this.setState({ description: parseInt(e.target.value)});
	},

	handleLocationChange: function(e) {
		this.setState({ location: e.target.checked});
	},

	handleWebsiteChange: function(e) {
		this.setState({ website: e.target.checked});
	},

	handleCancel: function(e) {
		e.preventDefault();
		this.resetForm();
		this.props.history.goBack();
	},

	resetForm: function() {
		this.setState({ title: "", description: "", private: false, category_id: 0 });
	},

	render: function() {
		
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Name
					<input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
					<input type="text" value={this.state.lastName} onChange={this.handleLastNameChange}/>
				</label>
				<br/>
				<label>About You
					<input type="text" value={this.state.description} onChange={this.handleDescriptionChange}/>
				</label>
				<br/>
				<label>Location
					<input type="text" value={this.state.location} onChange={this.handleLocationChange} />
				<br/>
				</label>
				<label>Website
					<input type="text" value={this.state.website} onChange={this.handleWebsiteChange}/>
				</label>
				<br/>
				<button onClick={this.handleCancel}>Cancel</button>
				<input type="submit" value="Save"/>
			</form>
		)
	}

});

module.exports = UserForm;