import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getTasksApi } from "./taskAPI";
import { Task } from "../../type";

const initialState: { tasks: Task[] } = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasksApi.fulfilled, (state, action)=>{
      state.tasks = action.payload
    })
  },
});


export const selectTask = (state:RootState)=>state.tasks

export default taskSlice.reducer