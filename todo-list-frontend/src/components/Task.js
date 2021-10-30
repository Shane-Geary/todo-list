import React from 'react';
import { Link } from 'react-router-dom';

const Task = (props) => {
    const { id, description } = props.task;

    return (
            <div>
                <table className="row">
                    <tbody>
                        <tr>
                            <Link to={{pathname: `/task/${id}`, state: {task: props.task}}}>
                                <td>- {description} </td>
                            </Link>
                            <td><button onClick={() => props.removeTaskHandler(id)}>Complete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
}

export default Task;