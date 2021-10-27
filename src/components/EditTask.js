import React from 'react';
import { Link } from 'react-router-dom';

const EditTask = (props) => {
    const { description } = props.location.state.task;
    return (
        <div>{description}</div>
    );
}

export default EditTask;