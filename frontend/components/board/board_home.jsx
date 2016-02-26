var React = require('react');
var Modal = require('react-bootstrap').Modal;

var BoardForm = require('./board_form');
var BoardNavBar = require('./board_navbar');
var BoardNavBarTabs = require('./board_navbar_tabs');
var BoardIndex = require('./board_index');

var BoardHome = React.createClass( {
	getInitialState: function() {
		return { showModal: false}; 
	},

	open: function() {
		this.setSate({ showModal: true });
	},

	close: function() {
		this.setSate({ showModal: false });
	},

	render: function() {
		var tabs = [
			{title: "Boards", content: <BoardIndex />}, 
			{title: "Pins",  content: ""}, 
			{title: "Followed Topics", content:  ""}
			];

		return (
			<div >
				<BoardNavBar />
				<BoardNavBarTabs tabs={tabs}/>
				
			</div>
		)
	}
});

module.exports = BoardHome;
				// {this.props.children}