import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'


const todoItems = [
  {
    task: 'Clean bathroom',
    id: 1528817077286,
    completed: false
  }
];

class App extends React.Component {
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state ={ todoItems};
  }

  //Adding todoItem to todoList
  addTodoItem =(e,item)=>{
    e.preventDefault();
    const newItem ={
      task: item, 
      id: Date.now(),
      completed: false 
    };
    this.setState({
      todoItems: [...this.state.todoItems, newItem]
    });
  }

  //Toggle to change task completed from false to true
  toggleItem = itemId =>{
   this.setState({
     todoItems: this.state.todoItems.map(item=>{
       // if the item matches the id that was clicked
       if (itemId === item.id) {
        // change completed to true
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
   });
  };

  clearCompleted = e =>{
    e.preventDefault();
      // if item is completed (item.completed is true) then filter out
    this.setState({todoItems: this.state.todoItems.filter(item=> !item.completed)});
  };
  
  render() {
    console.log('rendering...')
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
