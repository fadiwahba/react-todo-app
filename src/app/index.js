const React = require('react');
const ReactDom = require('react-dom');
// import { Router, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// other module requires
const TodoItem = require('./todoItem');
const AddTodoItem = require('./addTodoItem');
const NavComponent = require('./navComponent');
const AboutComponent = require('./aboutComponent');

// CSS require
require('./css/index.css');

// Setup routes
var App = React.createClass({
  render: function () {
    return (
      <Router>
        <Switch>
          <Route exact={true} path={'/'} component={TodoComponent} />
          <Route path={'/about'} component={AboutComponent} />
        </Switch>
      </Router>
    );
  }
});

// create Todocomponent
var TodoComponent = React.createClass({
  getInitialState: function () {
    console.log('getInitialState');
    return {
      todos: ['Wake up', 'Have breakfast', 'Go to work', 'take a nap', 'Work work work']
    }
  },

  render: function () {
    console.log('Render');

    let todos = this.state.todos.map(function (item, index) {
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete} />
      )
    }.bind(this));
    return (
      <div id="todo-list">
        <NavComponent />
        <h2>My Todos:</h2>
        <ul>
          {todos}
        </ul>
        <AddTodoItem onAdd={this.onAdd} />
      </div>
    );
  },
  // custom event handling
  onDelete: function (item) {
    var updatedTodos = this.state.todos.filter(function (val, index) {
      return item !== val;
    });

    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function (item) {
    let updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  },

  // lifecycle functions
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    console.log('componentDidMount');
  },
  componentWillUpdate: function () {
    console.log('componentWillUpdate');
  },
  componentDidUpdate: function () {
    console.log('componentDidUpdate');
  }

});

// render compoinent in HTML
ReactDom.render(<App />, document.getElementById('todo-wrapper'));
