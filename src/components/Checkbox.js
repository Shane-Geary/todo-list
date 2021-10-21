import React from 'react';

class Checkbox extends React.Component {
    render() {
        return (
            <form action="#">
                <p>
                    <input type="checkbox" id="test" />
                    <label htmlFor="test"></label>
                </p>
            </form>
        );
    }
}

export default Checkbox;