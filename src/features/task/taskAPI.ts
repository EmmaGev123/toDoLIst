import { myAxios } from './../../app/store';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTasksApi = createAsyncThunk(
    "get tasks",
    async () => {
        const { data } = await myAxios.get("toDoList")
        return data
    }
)

export const createTasksApi = createAsyncThunk(
    "create tasks",
    async (obj:  {
        name: string;
        description: string;
    }) => {
        const { data } = await myAxios.post("toDoList", obj)
        return data
    }
)


export const updateDone = createAsyncThunk(
    "update done",
    async ({id, obj}:{id: number, obj:{done:boolean}}) => {
        const { data } = await myAxios.patch("toDoListDone/" + id, obj)
        console.log(data);
        
        return data
    }
)

export const delTasksApi = createAsyncThunk(
    "del tasks",
    async (id: number) => {
        const { data } = await myAxios.delete("toDoList/" + id)
        return data
    }
)
