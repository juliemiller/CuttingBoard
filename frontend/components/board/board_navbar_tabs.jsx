var React = require('react');
var Headers = require('./board_navbar_headers');

NavBarTabs = React.createClass({
	
	getInitialState: function() {
		return { selectedTab: 0};
	},

	selectTab: function(num) {
		this.setState({ selectedTab: num });
	},

	render: function () {
    var tab = this.props.tabs[this.state.selectedTab];

    return (
    	<div >
        <Headers 
          selectedTab={this.state.selectedTab}
          onTabChosen={this.selectTab}
          tabs={this.props.tabs}>
        </Headers>
        <div>
        	{tab.content}
        </div>
      </div>
    );
  }
});

module.exports = NavBarTabs;