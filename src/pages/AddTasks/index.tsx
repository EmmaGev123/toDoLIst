import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { myAxios } from "../../app/store";
import { createTasksApi } from "../../features/task/taskAPI";
import { Task } from "../../features/task/type";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";

export default function AddTasks() {
    const dispatch = useAppDispatch();
    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: "",
            description: "",
        },
        validationSchema: basicSchema,

        onSubmit: (
            values: {
                name: string;
                description: string;
            },
            actions
        ) => {
            console.log(values);
            console.log(actions);
            actions.resetForm();
            dispatch(createTasksApi(values));
            // alert(JSON.stringify(values, null, 2));
        },
    });
    // const { handleSubmit, register, reset } = useForm<Task>();
    // const dispatch = useAppDispatch();
    // const save = async (tasks: Task) => {
    //     dispatch(createTasksApi(tasks));
    //     reset();
    // };

    return (
        <div>
            <h1>add tasks</h1>
            <form onSubmit={handleSubmit} className="TodoForm">
                <input
                    className={errors.name && touched.name ? "input-error todo-input" : " todo-input"}
                    value={values.name}
                    onChange={handleChange}
                    id="name"
                    type="name"
                    placeholder="enter task name"
                />
                {errors.name && touched.name && (
                    <p className="error">{errors.name}</p>
                )}
                <input
                    className={
                        errors.description && touched.name ? "input-error" : ""
                    }
                    id="description"
                    type="description"
                    value={values.description}
                    onChange={handleChange}
                    placeholder="enter task description"
                />
                {errors.description && touched.description && (
                    <p className="error">{errors.description}</p>
                )}
                <button className="todo-btn" type="submit">
                    save
                </button>
            </form>
        </div>
    );
}
