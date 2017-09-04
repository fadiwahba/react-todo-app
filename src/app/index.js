const React = require('react');
const ReactDom = require('react-dom');
const TodoItem = require('./todoItem');
require('./css/index.css');
// create Todocomponent
var TodoComponent = React.createClass({
    getInitialState: function () {
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
        }
    },

    render: function () {
        let todos = this.state.todos.map(function(item, index){
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            )
        }.bind(this));
        return (
            <div id="todo-list">
                <h2>My Todos:</h2>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    },
    // custom event handling
    onDelete: function (item) {
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });

        this.setState({
            todos: updatedTodos
        });
    }
});

// render compoinent in HTML
ReactDom.render(<TodoComponent />, document.getElementById('todo-wrapper'));
