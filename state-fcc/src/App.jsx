
import { useReducer, useState } from 'react';
import './App.css';

const ACTIONS = {
  ADD_TODO : "add-todo",
  DONE_TODO : "complete-todo"
}




function reducer(todo, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todo, newTodo(action.payload.name)];
    case ACTIONS.DONE_TODO:
      return todo.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      });
    default:
      return todo;
  }
}



function newTodo(name) {
  return {id: Date.now(), name:name, complete: false}
}



function App() {
  const [todo, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("")


  function handleAdd(e) {
    e.preventDefault();
    dispatch({ type : ACTIONS.ADD_TODO, payload : {name}} );
    setName(" ");
  }


  console.log(todo)

  return (
    <div className="App">
        <form className='todo' onSubmit={handleAdd}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {todo.map((list) => (
              <ul key={list.id}>
                <li style={{ color : todo.complete ? "#AAA" : "#000"}}>{list.name}</li>
              </ul>
            ))}
            <button>Done</button>
        </form>
    </div>
  );
}

export default App;
