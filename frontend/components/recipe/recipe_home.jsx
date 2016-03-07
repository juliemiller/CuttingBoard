var React = require('react');
var RecipeIndex = require('./recipe_index');

var RecipeHome = React.createClass( {
	
	render: function() {
		var current_user;
	if (this.props) {
		current_user = this.props.params.current_user;
	}
		return (
			<div> 
				<RecipeIndex current_user={current_user} />
			</div>
		)
	}
});

module.exports = RecipeHome;