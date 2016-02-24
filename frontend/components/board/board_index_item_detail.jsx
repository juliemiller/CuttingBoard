var React = require('react');
var BoardStore = require('../../stores/board_store');
var BoardDetailNavBar = require('./board_detail_navbar');

var BoardIndexItemDetail = React.createClass({
	getInitialState: function() {
		return { board: BoardStore.find(parseInt(this.props.params.boardId)) };
	},

	componentDidMount: function() {
		var id = parseInt(this.props.params.boardId);
		this.setState({ board: BoardStore.find(id) });
	},

	renderEditForm: function() {
		this.props.history.push("boards/" + this.state.board.id + "/edit");
	},

	renderBoards: function() {
		this.props.history.push("boards/");
	},

	render: function() {
		var boardDisplay = "";
		if (this.state.board) {
			boardDisplay = this.state.board.title;
		}
		return (
			<div>
				<h2>{boardDisplay}</h2>
				<BoardDetailNavBar board={this.state.board}/>
				{this.props.children}
			</div>
		)
	}
});

module.exports = BoardIndexItemDetail;