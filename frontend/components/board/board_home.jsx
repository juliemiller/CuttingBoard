var React = require('react');

var BoardForm = require('./board_form');
var BoardNavBar = require('./board_navbar');
var BoardNavBarTabs = require('./board_navbar_tabs');
var BoardIndex = require('./board_index');

var BoardHome = React.createClass( {
	openNewBoardForm: function() {
		this.props.history.push("boards/newBoard")
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

				{this.props.children}
			</div>
		)
	}
});

module.exports = BoardHome;