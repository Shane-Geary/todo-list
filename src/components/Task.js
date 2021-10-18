import React from 'react';
import { Link } from 'react-router-dom';

const Task = (props) => {
    const { id, description } = props.task;

    return (
            <div>
                <table className="row">
                    <tr>
                        <Link>
                            <td>- {description} </td>
                        </Link>
                        <br />
                        <td><button onClick={() => props.removeTaskHandler(id)}>Complete</button></td>
                    </tr>
                </table>
            </div>
        );
}

export default Task;