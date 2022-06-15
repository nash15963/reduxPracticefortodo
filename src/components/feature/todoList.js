import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name : 'todo' ,
    initialState : [] ,
    reducers :{
        addTodo :(state ,action)=>{
            const items = {
                id : Math.random()*100,
                item : action.payload
            }
            state.push(items)
        },
        deleteTodo : (state ,action)=>{
            console.log(action ,'i am action -- delete')
            return state.filter((item)=>item.id !== action.payload)
        }
    }
})

export const { addTodo , deleteTodo } = todoSlice.actions ;
export default todoSlice.reducer ;