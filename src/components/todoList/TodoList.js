import "./todoList.css";
import { useSelector, useDispatch } from "react-redux";
import { todoAction } from "../../redux/todoReducer";
import { useEffect } from "react";
import axios from "axios";


export default function TodoList(){
   
    const todos = useSelector((state) => state.todoReducer.todos)
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://dummyjson.com/todos')
            .then((res) => {
                console.log(res.data.todos);
                dispatch(todoAction.setInitialState(res.data.todos))
            })
    },[]);

    return(
          <div class="container">
            <ul>
                {todos.map((task, i) => (
                    <li key={i}>
                        <span className="content">{task.todo}</span>
                        <span className={task.completed ? "completed" : "pending"}>
                            {task.completed ? "Completed" : "Pending"}
                        </span>
                        <button className="btn btn-warning" onClick={() => 
                            {dispatch(todoAction.toggle(i))}}>Toggle</button>
                        <button className="btn btn-danger" onClick={() =>
                             {dispatch(todoAction.delete(i))}}>Delete</button>
                    </li>
                ))}
            </ul>
            </div>
    )
}