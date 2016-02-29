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
        <div className="nav nav-tabs centered boardNavBar">
          <Headers 
            selectedTab={this.state.selectedTab}
            onTabChosen={this.selectTab}
            tabs={this.props.tabs}>
          </Headers>
        </div>
        <div className="boards container-fluid">
        	{tab.content}
        </div>
      </div>
    );
  }
});

module.exports = NavBarTabs;