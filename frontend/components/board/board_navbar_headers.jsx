var React = require('react');

var BoardNavBarHeader = React.createClass({
	render: function () {
    var selected = this.props.selectedPane;
    var that = this;
    var headers = this.props.tabs.map(function (tab, index) {
      var title = tab;
      var klass = ""
      if (index === selected) {
        klass = "active"
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
      <div>
        {headers}
      </div>

    );
  }
});

module.exports = BoardNavBarHeader;