import React from 'react';

class AddTask extends React.Component {
    render() {
        return (
            <div>
                <h2>New Task</h2>
                <form>
                    <div>
                        <label>Task</label>
                        <input
                        type="text"
                        name="description"
                        placeholder="..."
                        />
                    </div>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddTask;