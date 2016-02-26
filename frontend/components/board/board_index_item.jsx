var React = require('react');
var History = require('react-router').History;

var BoardIndexItem = React.createClass({
	mixins: [History],

	renderBoard: function() {
		this.history.push("boards/" + this.props.board.id);
	},

	render: function() {
		return (
			<div className="col-md-3" onClick={this.renderBoard}>
				<section className="board">
				<h5>{this.props.board.title}</h5>
				<div className="pictures" >
	 				<div className="biggerPicture">Picture 1 </div>
					<div className="container-float smallPictures">
						<div className="smallPicture col-md-4">PIC1</div>
						<div className="smallPicture col-md-4">PIC2</div>
						<div className="smallPicture col-md-4">PIC3</div>
					</div>
				</div>
			</section> 
			</div>

		)
	}
});

module.exports = BoardIndexItem;