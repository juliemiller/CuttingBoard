var React = require('react');
var RecipeIndex = require('./recipe_index');

var RecipeHome = React.createClass( {
	render: function() {
		return (
			<div> 
				<RecipeIndex />
			</div>
		)
	}
});

module.exports = RecipeHome;