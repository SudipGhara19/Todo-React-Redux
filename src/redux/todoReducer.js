
// import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./todoActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[
            {todo: 'meeting at 8 pm', completed: false},
            {todo: 'meeting at 8 pm', completed: false}
    ],
}

const todoSlice = createSlice({
    name:'todo',
    initialState: initialState,
    reducers: {
        //setting initial state with api data
        setInitialState:(state, action) => {
            state.todos = [...action.payload];
        },
        //add reducer
        add:(state, action) =>{
            state.todos.push({
                todo: action.payload,
                completed: false,
            })
        },

        toggle:(state, action) => {
            state.todos.map((t, i) => {
                if(i === action.payload){
                    t.completed =! t.completed;
                }
                return t;
            })
        },

        delete:(state, action) => {
            state.todos.splice(action.payload, 1);
        }
    }
});

export const todoReducer = todoSlice.reducer;
export const todoAction = todoSlice.actions;


// export function todoReducer(state = initialState, action){
//     switch(action.type){
//         case ADD_TODO:
//             return{
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         todo: action.todo,
//                         completed: false
//                     }
//                 ]
//             }
        
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i) => {
//                     if(i === action.index){
//                         todo.completed =! todo.completed;
//                     }
//                     return todo;
//                 }),
//             }

//         case DELETE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.filter((_, i) => i !== action.index)
//             }

//         default :
//         return state;
//     }
// }

