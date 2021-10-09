import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const renderTaskList = props.tasks.map((task) => {
        return <Task task={task} />;
    });
    return (
        <div>
            {renderTaskList}
        </div>
    );
}

export default TaskList;