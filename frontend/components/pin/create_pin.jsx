var React = require('react');
var RecipeItem = require('../recipe/recipe_item');
var BoardList = require('../board/board_list');

var CreatePin = React.createClass( {
	modalCallback: function() {
		this.props.modalCallback();
	},

	render: function() {
		
		return (
			<div className="createPin">
				<div className="createPinRecipeItem">
					<RecipeItem recipe={this.props.recipe} />
				</div>
				<BoardList current_user={this.props.current_user} recipe={this.props.recipe} modalCallback={this.modalCallback} />
			</div>
		)
	}
});

module.exports = CreatePin;