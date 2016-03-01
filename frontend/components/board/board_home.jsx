var React = require('react');
var Modal = require('react-bootstrap').Modal;

var CategoryIndex = require('../category/category_index');
var BoardForm = require('./board_form');
var BoardNavBar = require('./board_navbar');
var BoardNavBarTabs = require('./board_navbar_tabs');
var BoardIndex = require('./board_index');
var PinIndex = require('../pin/pin_index');

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
			{title: "Pins",  content: <PinIndex />}, 
			{title: "Topics", content:  <CategoryIndex />}
			];

		return (
			<div >
				<BoardNavBar current_user={this.props.current_user}/>
				<BoardNavBarTabs tabs={tabs}/>
			</div>
		)
	}
});

module.exports = BoardHome;
