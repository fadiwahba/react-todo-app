const React = require('react');
require('./css/aboutComponent.css');
const NavComponent = require('./navComponent');

// create AboutComponent component
var AboutComponent = React.createClass({
  render: function () {
    return (
      <div id="about-component">
        <NavComponent />
        <h2>All about me!</h2>
      </div>
    )
  },
});

module.exports = AboutComponent;
