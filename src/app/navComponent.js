const React = require('react');
require('./css/navComponent.css');
import { Link } from 'react-router-dom'

// create NavComponent component
var NavComponent = React.createClass({
  render: function () {
    return (
      <nav id="main-nav">
        <ul>
          <li>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
          </li>
        </ul>
      </nav>
    )
  },
});

module.exports = NavComponent;
