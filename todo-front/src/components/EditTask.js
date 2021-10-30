import React from 'react';
import { Link } from 'react-router-dom';

const EditTask = (props) => {
    const { description } = props.location.state.task;
    return (
        <div>
            <div>
                {description}
            </div>
            <Link to='/' >
                <button>Back</button>
            </Link>
        </div>
    );
}

export default EditTask;