import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
  super()
  this.state = {
    todo
  }
}

addItem = (e, item) => {
  e.preventDefault()
  const newItem = {
    task: item,
    id: Date.now(),
    completed: false
  }
  this.setState({
    todo: [...this.state.todo, newItem]
  })
}

toggleItem = itemId => {
  this.setState({
    todo: this.state.todo.map(item => {
      if(itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
  })
}

clearCompleted = e => {
  e.preventDefault()
  this.setState({
    todo: this.state.todo.filter(item => !item.completed)
  })
}

  render() {
    return (
      <div>
        <div>
          <h1>Get All the Things Done!</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList 
        todo={this.state.todo}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
