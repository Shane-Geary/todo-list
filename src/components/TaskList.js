import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const removeTaskHandler = (id) => {
        props.deleteTaskHandler(id);
    }

    const tasks = [
        {
            id: 1,
            description: "Add Routes",
        }
    ]

    const renderTaskList = tasks.map((task) => {
        return (
            <Task task={task} removeTaskHandler={removeTaskHandler} key={task.id} />
        );
    })
    return (
        <div>
            <h2>Task List
                <button>Add Task</button>
            </h2>
            <div>{renderTaskList}</div>
        </div>
    );
}

export default TaskList;