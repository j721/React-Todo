import React from 'react';
import TodoList from './components/TodoList';
import Todoform from './components/TodoForm';
// import '.components/Todo.css';


const todoItems = [
  {
      task: 'Clean bathroom',
      id: 1,
      completed: false
  },
  {
      task: 'Clean kitchen',
      id: 2,
      completed: false
  },
  {
      task: 'Clean bedroom',
      id: 1,
      completed: false
  },
  {
      task: 'Clean out closet',
      id: 1,
      completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state ={
      todoItems  // same as === items: items
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
