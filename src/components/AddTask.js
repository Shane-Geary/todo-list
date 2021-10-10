import React from 'react';

class AddTask extends React.Component {
    state = {
        description: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.description === "") {
            alert("Fill in a task")
            return;
        }
        this.props.addTaskHandler(this.state);
        this.setState({ description: "" });
    }

    render() {
        return (
            <div>
                <h2 className="new-task">New Task</h2>
                <form onSubmit={this.add}>
                    <div>
                        <label className="label">Task</label>
                        <input
                        type="text"
                        name="description"
                        placeholder="..."
                        value={this.state.description}
                        onChange={(e) => this.setState({description: e.target.value})}
                        />
                    </div>
                    <br />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddTask;