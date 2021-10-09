import React from 'react';

const Task = (props) => {
    const { id, description } = props.task;

    return (
        <div>
            <ul>
                <li>{description}</li>
                <button onClick={() => props.removeTaskHandler(id)}>Remove Task</button>
            </ul>
        </div>
    );
}

export default Task;