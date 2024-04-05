import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    delTasksApi,
    getTasksApi,
    updateDone,
} from "../../features/task/taskAPI";
import { selectTask } from "../../features/task/taskSlice";

export default function ShowTask() {
    const { tasks } = useAppSelector(selectTask);
    // console.log(tasks);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getTasksApi());
    }, []);
    return (
        <div className="container">
        <div className="todo-app">
            <h2 className="add">To-Do-App</h2>
            {tasks.map((elm) => (


<ul key={elm.id}>
    <li  className="todo"
        style={
            elm.done
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
        }
        onClick={() => {
            dispatch(updateDone({id:elm.id, obj:{done:!elm.done}}))
                .unwrap()
                .then((res) => {
                    dispatch(getTasksApi());
                });
        }}
    >
        {elm.name}
    </li>
    <li 
        style={
            elm.done
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
        }
    >
        {elm.description}
    </li>
    <li>
        <button
            onClick={() => {
                dispatch(delTasksApi(elm.id))
                    .unwrap()
                    .then((res) => {
                        dispatch(getTasksApi());
                    });
            }}
        >
            &times;
        </button>
    </li>
</ul>
))}
        </div>

        
    </div>
        )
}





