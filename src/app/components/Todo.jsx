
import {useSelector} from "react-redux"
import AddForm from "./AddForm";

export default function Todo(){
    const todos = useSelector((state) => state.todos);
   
    return (
        <>
        <AddForm/>
        <h2>TodoList App</h2 >
        <ul>
            {todos.map((todo)=>(<li key={todo.id}>{todo.task}</li>))}
        </ul>
        </>
    )
}