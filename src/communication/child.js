import React, { Component } from 'react'

export default class Child extends Component {
    handleResetInfo = () => {
        console.log("reset");
        const username = "MinAn";
        const age = 4;
        console.log(username, age);
        //lifting state up
        this.props.resetInfo(username, age);
    }

    render() {
        // const propsUsername = this.props.username;
        const { username, age } = this.props;
        console.log(username);
        return (
            <div>
                <h3>Child Component</h3>
                <p>Username: {username} - Age: {age}</p>
                <button className="btn btn-danger" onClick={this.handleResetInfo}>
                    Reset Info
                </button>
            </div>
        )
    }
}
