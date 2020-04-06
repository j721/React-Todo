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
      id: 3,
      completed: false
  },
  {
      task: 'Clean out closet',
      id: 4,
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


  //Adding todoItem to todoList
  addTodoItem =(e,item)=>{
    e.preventDefault();
    const newTodoItem ={
      task: item, 
      id: Date.now(),
      purchased: false 
    };
    this.setState({
      todoItems: [...this.state.todoItems, newTodoItem]
    });
  }

  //Toggle to change task completed from false to true
  toggleItem = itemId =>{
   this.setState({
     todoItems: this.state.todoItems.map(item=>{
       // if the item matches the id that was clicked
       if (itemId === item.id) {
        // change purchased to true
        // return the item
         return{
         ...item, 
         completed: !item.completed
        };
       }
         // if the item does NOT match the id that was clicked
        // just return the item, unchanged
       return item; 
     })
   })
  }

  clearCompleted = e =>{
    e.preventDefault();
      // if item is completed (item.completed is true) then filter out
    this.setState({
      todoItems: this.state.todoItems.filter(item=> !item.completed)
    });
  };
  
  render() {
    return (
      <div className ="App">
        <div className ="header">
        <h2>Todo List</h2>
        <TodoForm addTodoItem ={this.addTodoItem}/>
        </div>
      <TodoList
        todoItems ={this.state.todoItems}
        toggleItem ={this.toggleItem}
        clearCompleted ={this.clearCompleted}
        />
        </div>
    );
  }
}

export default App;
