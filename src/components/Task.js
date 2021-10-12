import React from 'react';

const Task = (props) => {
    const { id, description } = props.task;

    return (
            <div>
                <table className="row">
                    <tr>
                        <td>- {description} </td>
                        <br />
                        <td><button onClick={() => props.removeTaskHandler(id)}>Complete</button></td>
                    </tr>
                </table>
            </div>
        );
}

export default Task;