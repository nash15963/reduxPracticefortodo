import React ,{ useState } from 'react'
import { addTodo ,deleteTodo } from './feature/todoList' ;
import { useDispatch ,useSelector } from 'react-redux'


const Todo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    const todoList = useSelector((state)=>{ return state.todo})
    const handleSubmit =()=>{
        dispatch(
            addTodo(value)
        )
    }
    const handleDelete =(id)=>{
        console.log(id)
        dispatch(
            deleteTodo(id)
        )
    }
  
    return (
    <div>
        <h1>Todo List</h1>
        <div>
            <input type="text" onChange={
                (event)=>{
                    setValue(event.target.value)
                }
            }/>
            <button onClick={handleSubmit}>send</button>
        </div>
        <h3>
            {todoList.map((e)=>{
                return <li key={e.id.toString()}> 
                <span>{e.id}</span> 
                {e.item} 
                <span onClick={() =>handleDelete(e.id)}>x</span>
                </li>
            })}
        </h3>
    </div>
  )
}

export default Todo