import React from "react";
import Button from "../Button/Button";

const TaskCard = ({
    task,
    onClickRemove = () => {},
    onClickEdit = () => {},
}) => {
    return (
        <div className="task-card">
            <div className="task-card-box">
                <div className="task-card-label">Task</div>
                <div className="task-card-name">{task.taskName}</div>
            </div>
            <div className="task-card-box">
                <div className="task-card-label">priority</div>
                <div className={`task-card-level ${task.priority}`}>
                    {task.priority}
                </div>
            </div>
            <div className="task-card-box">
                <p className="status">{task.status}</p>
            </div>
            {/* <div className="task-card-box">
                <p>chưa hoàn thành</p>
            </div> */}
            <div className="task-card-box">
                <Button classNames="btn-edit" onClick={onClickEdit}>
                    Edit
                </Button>
                <Button classNames="btn-remove" onClick={onClickRemove}>
                    x
                </Button>
            </div>
        </div>
    );
};

export default TaskCard;
