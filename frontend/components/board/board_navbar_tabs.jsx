var React = require('react');
var Headers = require('./board_navbar_headers');

NavBarTabs = React.createClass({
	
	getInitialState: function() {
		return { selectedTab: 0};
	},

	selectTab: function(num) {
		console.log(num);
		this.setState({ selectedTab: num });
	},

	render: function () {
    var tab = this.props.tabs[this.state.selectedTab];

    return (
      <div className="tabs">
        <Headers
          selectedTab={this.state.selectedTab}
          onTabChosen={this.selectTab}
          tabs={this.props.tabs}>
        </Headers>
        <p>
          {tab.content}
        </p>
      </div>
    );
  }
});

module.exports = NavBarTabs;