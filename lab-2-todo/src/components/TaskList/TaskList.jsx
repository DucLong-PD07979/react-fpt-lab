import React, { useState } from "react";
import "../../styles/tasklist.css";
import Button from "../Button/Button";
import TaskCard from "../TaskCard/TaskCard";
import data from "../../data/data.json";

const TaskList = () => {
    const [taskData, setTaskData] = useState(data);
    const [toggleTask, setToggleTask] = useState(false);
    const [taskInput, setTastInput] = useState("");
    const [priority, setPriority] = useState("hight");
    const [toggleEdit, setToggleEdit] = useState(false);
    const [indexEdit, setIndexEdit] = useState(null);
    const [status, setStatus] = useState("");

    const handleToggleTask = () => {
        setToggleTask(!toggleTask);
    };

    const handleAddTask = () => {
        if (taskInput.length > 100) {
            alert("tên task không được quá 5 kí tự");
        } else {
            const task = {
                taskName: taskInput,
                status: "todo",
                priority: priority,
            };
            const newTaskData = [...taskData, task];
            setTaskData(newTaskData);
        }
        setTastInput("");
    };

    const handleRemoveTask = (index) => {
        const newTaskData = taskData.filter((task, i) => index !== i);
        setTaskData(newTaskData);
    };

    const handleEditTask = (index) => {
        setTastInput(taskData[index].taskName);
        setToggleEdit(true);
        setIndexEdit(index);
    };

    const handleUpdateTask = () => {
        if (!priority || !status || !taskInput) {
            alert(
                "bạn đã chọn thiếu trường input hoặc priority hoặc status mời bạn xem lại"
            );
        } else {
            const taskUpdate = taskData.find((task, i) => indexEdit === i);
            taskUpdate.taskName = taskInput;
            taskUpdate.priority = priority;
            taskUpdate.status = status;
            const taskDataApterRemove = taskData.filter(
                (task, i) => i !== indexEdit
            );
            setTaskData([...taskDataApterRemove, taskUpdate]);
            console.log(taskData);
        }
        setTastInput("");
        setToggleEdit(false);
    };

    return (
        <div className="task-list-container">
            <div className="task-list">
                <div className="task-list__header">
                    <h1>Task list</h1>
                    <Button classNames="btn-open" onClick={handleToggleTask}>
                        + Add task
                    </Button>
                </div>
                <div className="task-list__body">
                    {taskData.map((task, i) => {
                        return (
                            <TaskCard
                                key={i}
                                task={task}
                                onClickRemove={() => handleRemoveTask(i)}
                                onClickEdit={() => handleEditTask(i)}
                            />
                        );
                    })}
                </div>
            </div>
            {toggleTask && (
                <div className="task-list-action">
                    <div className="task-list__header">
                        <h4>Add list</h4>
                        <Button
                            classNames="btn-close"
                            onClick={handleToggleTask}
                        >
                            x
                        </Button>
                    </div>
                    <div className="task-list__group">
                        <label htmlFor="task">Task</label>
                        <input
                            type="text"
                            value={taskInput}
                            onChange={(e) => setTastInput(e.target.value)}
                            placeholder="Task list của bạn ở đây"
                        />
                    </div>
                    <div className="task-list__group">
                        <label htmlFor="task">Priority</label>
                        <div>
                            <Button
                                classNames="buton-pirority hight"
                                onClick={(e) => setPriority("hight")}
                            >
                                Hight
                            </Button>
                            <Button
                                classNames="buton-pirority medium"
                                onClick={(e) => setPriority("medium")}
                            >
                                Medium
                            </Button>
                            <Button
                                classNames="buton-pirority low"
                                onClick={(e) => setPriority("low")}
                            >
                                Low
                            </Button>
                        </div>
                    </div>
                    <Button classNames="btn-add" onClick={handleAddTask}>
                        Add
                    </Button>
                </div>
            )}
            {toggleEdit && (
                <div className="task-list-action">
                    <div className="task-list__header">
                        <h4>Update list</h4>
                        <Button
                            classNames="btn-close"
                            onClick={(e) => setToggleEdit(false)}
                        >
                            x
                        </Button>
                    </div>
                    <div className="task-list__group">
                        <label htmlFor="task">Task</label>
                        <input
                            type="text"
                            value={taskInput}
                            onChange={(e) => setTastInput(e.target.value)}
                            placeholder="Task list của bạn ở đây"
                        />
                    </div>
                    <div className="task-list__group">
                        <label htmlFor="task">Priority</label>
                        <div>
                            <Button
                                classNames="buton-pirority hight"
                                onClick={(e) => setPriority("hight")}
                            >
                                Hight
                            </Button>
                            <Button
                                classNames="buton-pirority medium"
                                onClick={(e) => setPriority("medium")}
                            >
                                Medium
                            </Button>
                            <Button
                                classNames="buton-pirority low"
                                onClick={(e) => setPriority("low")}
                            >
                                Low
                            </Button>
                        </div>
                    </div>
                    <div className="task-list__group">
                        <label htmlFor="task">Status</label>
                        <div>
                            <Button
                                classNames="buton-pirority"
                                onClick={(e) => setStatus("todo")}
                            >
                                todo
                            </Button>
                            <Button
                                classNames="buton-pirority"
                                onClick={(e) => setStatus("done")}
                            >
                                done
                            </Button>
                            <Button
                                classNames="buton-pirority"
                                onClick={(e) => setStatus("in process")}
                            >
                                in process
                            </Button>
                        </div>
                    </div>
                    <Button classNames="btn-add" onClick={handleUpdateTask}>
                        update
                    </Button>
                </div>
            )}
        </div>
    );
};

export default TaskList;
