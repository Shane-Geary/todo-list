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
                <form onSubmit={this.add}>
                    <div className="centered">
                        <label htmlFor="name">Add Task</label>
                        <input
                        id="name"
                        required="required"
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={(e) => this.setState({description: e.target.value})}
                        />
                    </div>
                    <br />
                    <button className="button"></button>
                </form>
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default AddTask;