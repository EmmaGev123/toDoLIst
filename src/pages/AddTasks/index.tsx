import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { myAxios } from "../../app/store";
import { createTasksApi } from "../../features/task/taskAPI";
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
        },
    });


    return (
        <div className="container">
            <div className="todo-app">
                <div className="card">

                    <h1 className="add">Add tasks</h1>
                    <form onSubmit={handleSubmit} className="card-form" >
                        <div className="input">
                            <input
                                className={errors.name && touched.name ? "input-error input-field" : "input-field"}
                                value={values.name}
                                onChange={handleChange}
                                id="name"
                                type="name"
                                placeholder="enter task name"
                            />
                            {errors.name && touched.name && (
                                <p className="error">{errors.name}</p>
                            )}
                        </div>
                        <div className="input">
                            <input
                                className={
                                    errors.description && touched.name ? "input-error input-field" : "input-field"
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
                        </div>
                        <div className="action">
                            <button className="action-button">Get started</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


