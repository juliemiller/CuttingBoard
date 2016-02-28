var React = require('react');
var RecipeItem = require('../recipe/recipe_item');
var BoardList = require('../board/board_list');

var CreatePin = React.createClass( {
	modalCallback: function() {
		this.props.modalCallback();
	},

	render: function() {
		
		return (
			<div>
				<div className="createPinRecipeItem">
					<RecipeItem recipe={this.props.recipe} />
				</div>
				<BoardList recipe={this.props.recipe} modalCallback={this.modalCallback} />
			</div>
		)
	}
});

module.exports = CreatePin;