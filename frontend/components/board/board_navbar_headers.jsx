var React = require('react');

var BoardNavBarHeader = React.createClass({
	render: function () {
    var selected = this.props.selectedTab;
    var that = this;
    var headers = this.props.tabs.map(function (tab, index) {
      var title = tab.title;
      var klass = ""
      if (index === selected) {
        klass = "nav-pills active"
      } else {
        klass="nav-pills"
      }

      return (
        <span
          key={ index }
          className={klass}
          onClick={that.props.onTabChosen.bind(null, index)}>
          {title}{' '}
        </span>
      );
    });
    return (
      <div className="">
        {headers}
      </div>

    );
  }
});

module.exports = BoardNavBarHeader;