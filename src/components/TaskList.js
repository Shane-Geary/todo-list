import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    // const removeListHandler = (id) => {
    //     props.deleteListHandler(id);
    // }

    const renderTaskList = props.tasks.map((task) => {
        return (
            <Task task={task} key={task.id} />
        );
    })
    return (
        <div>
            {renderTaskList}
            <button onClick={() => props.deleteListHandler()}>Delete List</button>
        </div>
    );
}

export default TaskList;