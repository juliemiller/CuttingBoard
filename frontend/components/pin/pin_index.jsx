var React = require('react');
var PinStore = require('../../stores/pin_store');
var ApiUtil = require('../../util/api_util');
var RecipeIndexItem = require('../recipe/recipe_index_item');
var Masonry = require('react-masonry-component');

var PinIndex = React.createClass({
	getInitialState: function() {
		return { pins: PinStore.all() };
	},

	componentDidMount: function() {
		this.pinListener = PinStore.addListener(this._onChange);
		ApiUtil.getPinnedRecipes();
	},

	_onChange: function() {
		this.setState({ pins: PinStore.all() });
	},

	componentWillUnmount: function() {
		this.pinListener.remove();
	},
	
	render: function() {
		return (
			<Masonry >
				{
					this.state.pins.map(function(pin) {
						return <RecipeIndexItem recipe={pin.recipe} key={pin.id}/>
					})
				}
			</Masonry>
		)
	}
});

module.exports = PinIndex;