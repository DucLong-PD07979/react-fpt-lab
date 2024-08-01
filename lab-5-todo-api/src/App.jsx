import { useEffect, useState } from "react";
import { addTask, deleteTask, getAllTask } from "./api";
import useFetch from "./useFetch";

function Task({ name_task, des, duration, handleDeleteTask }) {
    return (
        <div className="p-2 bg-slate-100 rounded-md">
            <h3>{name_task}</h3>
            <h3>{des}</h3>
            <h3>{duration}</h3>
            <div>
                <button className="px-5 bg-slate-700 text-gray-200 mr-1 text-sm">
                    sửa
                </button>
                <button
                    className="px-5 bg-slate-700 text-gray-200 mr-1 text-sm"
                    onClick={() => handleDeleteTask()}
                >
                    xóa
                </button>
            </div>
        </div>
    );
}

function App() {
    const [isAddTaskToggle, setIsAddTaskToggle] = useState(false);
    const [isUpdateTask, setIsUpdateTask] = useState(false);

    const [formValue, setFormValue] = useState({
        name_task: "",
        des: "",
        duration: new Date(),
    });

    const handleChangeValue = (e) => {
        const value = e.target.value;
        let name = e.target.name;

        setFormValue((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTask(formValue);
        setIsAddTaskToggle(!isAddTaskToggle);
    };

    const { result: taskData, isLoader } = useFetch(getAllTask, [
        isAddTaskToggle,
    ]);

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        setIsAddTaskToggle(!isAddTaskToggle);
    };

    if (isLoader) {
        return "...loading!";
    }

    return (
        <div className="app text-gray-800">
            <div className="w-[1200px] mx-auto ">
                <div className="mt-10">
                    <h1 className=" font-medium text-lg">Todo list</h1>
                    <div>
                        <div className="flex flex-col">
                            <label htmlFor="name_task" className="">
                                name task
                            </label>
                            <input
                                className="p-2 focus:outline-current"
                                type="text"
                                id="name_task"
                                name="name_task"
                                onChange={(e) => handleChangeValue(e)}
                                placeholder="Hoàn thành lab 5"
                            ></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="description" className="">
                                description
                            </label>
                            <input
                                className="p-2 focus:outline-current"
                                type="text"
                                id="description"
                                name="des"
                                onChange={(e) => handleChangeValue(e)}
                                placeholder="tạo api, component ...."
                            ></input>
                        </div>
                        <div className="flex flex-col w-fit">
                            <label htmlFor="duration" className="">
                                duration
                            </label>
                            <input
                                type="date"
                                name="duration"
                                id="duration"
                                onChange={(e) => handleChangeValue(e)}
                            ></input>
                        </div>
                        <button
                            className="px-5 py-1 bg-slate-600 text-yellow-100 my-3 rounded-sm"
                            onClick={handleSubmit}
                        >
                            Create
                        </button>
                    </div>
                </div>
                <div className="grid gap-3 grid-cols-4">
                    {taskData.map((task, index) => {
                        const { name_task, des, duration, id } = task;
                        return (
                            <Task
                                handleDeleteTask={() => {
                                    handleDeleteTask(id);
                                }}
                                key={index + duration}
                                name_task={name_task}
                                des={des}
                                duration={duration}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
