import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (evt) => {
        evt.preventDefault();
        console.log(task);//Debugging point:Check if task is correctly captured
        dispatch(addTodo(task));
       
    };

   
    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}></input>
            <button>Add Task</button>
        </form>
    );
}
