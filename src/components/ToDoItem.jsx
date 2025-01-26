import React, {useRef, useState} from 'react'

function ToDoItem(props) {
  console.log('props',props)

  const [EditFlag, setEditFlag] = useState(false)
  const [updatedTodoText, setupdatedTodoText] = useState(props.todo.name);
  const comp = useRef();
  const checkref = useRef();

  function deleteTodo(index){
    
   
    let updatedTodos = props.todos.filter(todo => {
          return todo.id != index;
    })

    props.setTodos(updatedTodos);

  }

  function editTodo(index){

    setEditFlag(true)
    let editContent = document.createElement('input');

    editContent.setAttribute('type','text');
    editContent.id = 'edit_Todo_Name';
    editContent.style.width = '300px';
    editContent.value = comp.current.textContent;
    editContent.style.textIndent = '.3rem';

    comp.current.replaceWith(editContent);

    editContent.addEventListener('change', () => {
        setupdatedTodoText(editContent.value)
    })
  
  }

  function UpdateTodo(index){
    
      setEditFlag(false)
      
      let edited = document.querySelector('#edit_Todo_Name');

      let updatedTodos = props.todos.map(todo => {
          if(todo.id === index){
            todo.name = updatedTodoText;
            return todo;
          }
          return todo;
      })

      edited.replaceWith(comp.current);
      props.setTodos(updatedTodos);

  }

  function handleCheck(index){
    
   let isChecked =  checkref.current.checked;

   console.log('isChecked',isChecked)
  

    let updatedTodos = props.todos.map(todo => {
      if(todo.id === index){
        todo.isCompleted = checkref.current.checked;
        return todo;
      }
      return todo;
  })

    props.setTodos(updatedTodos);
    
    console.log('completed todos', props.todos)
  }

  return (
    <div className='todo_Item_styles'>
         <div className='todo_Heading w-80'>
         <h1 className='todo_Item_Txt font-extrabold' ref={comp}>{props.todo.name}</h1>
         </div>
         <div className='td_edit'>
              
              <div className='border-2 w-28 flex justify-center'>
              <button className='font-bold rounded w-24' onClick={() => deleteTodo(props.todo.id)}>Delete</button>
              </div>

              <div className='w-36 flex justify-center items-center gap-2'>
              <input className='accent-amber-300 w-6 h-6 border-2' 
              type="checkbox" name="isCompleted" id="isComplete" 
              ref={checkref} onChange={() => handleCheck(props.todo.id)}/>
              {props.todo.isCompleted === true ? <h3 className='text-lg font-bold'>Completed</h3> : <h3 className='text-lg font-bold'>Incomplete</h3> }
              </div>
              
              <div className='w-20 flex justify-center items-center gap-2' style={{paddingBottom:'1rem', paddingTop:'.9rem'}}>
              { EditFlag ? 
                <button className='font-bold border-2 rounded w-24' onClick={() => UpdateTodo(props.todo.id)}> Save </button>
              : <button className='text-2xl' onClick={() => editTodo(props.todo.id)}>✍</button>
              }
              </div>
              
         </div>
    </div>
  )
}

export default ToDoItem