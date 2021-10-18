import React from 'react';
import { Link } from 'react-router-dom';

const Task = (props) => {
    const { id, description } = props.task;

    return (
            <div>
                <table className="row">
                    <tbody>
                    <tr>
                        <Link to={`/task/${id}`}>
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