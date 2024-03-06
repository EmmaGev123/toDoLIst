import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    delTasksApi,
    getTasksApi,
    updateDone,
} from "../../features/task/taskAPI";
import { selectTask } from "../../features/task/taskSlice";
import { Task } from "../../features/task/type";

export default function ShowTask() {
    const { tasks } = useAppSelector(selectTask);
    // console.log(tasks);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getTasksApi());
    }, []);
    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((elm) => (
                            <tr key={elm.id}>
                                <td  className="todo"
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
                                </td>
                                <td 
                                    style={
                                        elm.done
                                            ? { textDecoration: "line-through" }
                                            : { textDecoration: "none" }
                                    }
                                >
                                    {elm.description}
                                </td>
                                <td>
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
