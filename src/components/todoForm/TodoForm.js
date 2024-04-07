import "./todoForm.css";

import { useState } from "react"
import { useDispatch } from "react-redux";
import { todoAction } from "../../redux/todoReducer";


export default function TodoForm(){
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoText('');
        dispatch(todoAction.add(todoText));
    }


    return(
        <div class="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-3" value={todoText} onChange=
                {(e) => setTodoText(e.target.value)}/>
                <button type="submit" className="btn btn-success float-end">
                    Add Todo
                </button>
            </form>
        </div>
    )
}