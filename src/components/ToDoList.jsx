import { useState } from "react"
import ToDoItem from "./ToDoItem"
import { todolist } from "../utils/mockdata"
import { v4 as uuidv4 } from 'uuid'

function ToDoList() {

  const [todos, setTodos] = useState(todolist);
  const [text, setText] = useState('');

  console.log('todos',todos)

  function addTodo(){
    
    let input_todo = document.querySelector("#input_Todo");

    if(input_todo.value === ''){
      return;
    }

    if(todos.length === 0){
      setText('');
    }

    input_todo.value='';

    document.querySelector("#input_Todo").setAttribute('placeholder','Enter Todo');

    let newTodo = {
          id:uuidv4(),
          name: text,
          iscompleted : false
    }

    setTodos(prev => [...prev, newTodo])

  }

  return (
    <div>
        <div className='Add_todo border-2 gap-4 flex justify-center items-center todo_search bg-lime-100'>
              <label htmlFor="input_Todo" className="font-bold text-xl">Add Todo :</label>
              <input id='input_Todo' type="text" placeholder="Enter Todo" onChange={(e) => setText(e.target.value)}
              className="w-xl h-10 indent-2 border-2 bg-amber-50 rounded"/>
              <button className="Btn_addTodo bg-pink-700 text-white w-10 h-10 text-2xl" 
              onClick={() => addTodo()}>✚</button>
        </div>
        <section className="Todo_Wrapper flex justify-center items-center w-full h-full">
           <div className='Todo_list flex flex-col justify-center border-4 border-amber-900'>
            <div className="todolist_header w-full h-full">
              <span className="header header1 border-2">TO - DOS</span>
              <span className="header header2 border-2">DELETE</span>
              <span className="header header3 border-2">COMPLETED</span>
              <span className="header header4 border-2">EDIT</span>
            </div>
              {todos.length > 0 ? todos.map((todo,index) => {
                  return <ToDoItem key={index} todo={todo} todos={todos} setTodos={setTodos} />
              }) : <h1 className="font-bold">No Todos...</h1>}
            
           </div>
        </section>
    </div>
  )
}

export default ToDoList