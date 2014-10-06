var React = require('react');
var Modal = require('react-modal');

var node = document.createElement('div');
document.body.appendChild(node);
var App = React.createClass({
  render: function() {
    return React.DOM.div({},
            React.DOM.button({}, 'No Good'),
            Modal({isOpen: true, ariaHideApp: false},
              React.DOM.button({}, 'This'),
              React.DOM.button({}, 'That')
            )
          );
  }
});
React.renderComponent(App(), node);