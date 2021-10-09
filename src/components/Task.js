import React from 'react';

const Task = (props) => {
    const { id, description } = props.task;

    return (
        <div>
            <ul>
                <li>{description}</li>
            </ul>
        </div>
    );
}

export default Task;