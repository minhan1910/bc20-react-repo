import React, { Component } from 'react'
import Child from './child';
import ChildFnc from './childFnc';
import ChildrenComponent from './children';

export default class Communication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Phạm Dương Minh An",
            age: 4
        };
    };

    change_info = () => {
        this.setState({
            username: "Phạm Dương Minh An",
            age: 19
        });
    };

    reset = (username, age) => {
        //hàm reset có nhiệm vụ nhận lại data từ component child
        console.log(username, age);
        this.setState({
            username,
            age
        })
    };

    render() {
        console.log("render");
        const { username, age } = this.state;
        return (
            <div>
                <h3>Communication</h3>
                <p>Component cha</p>
                <p>username: {username} - Age: {age}</p>
                <button className="btn btn-success" onClick={this.change_info}>Change info</button>
                <hr/>
                {/* Props từ thằng cha sang thằng con */}
                <Child username={username} age={age} resetInfo={this.reset}/>
                <hr/>
                {/* Này là thẻ khuyết */}
                <ChildFnc username={username} age={age} />
                <hr/>
                <ChildrenComponent>
                    <p>Username: {username} - Age: {age}</p>
                    <div>Minh An</div>
                    <h3>Hello</h3>
                </ChildrenComponent>
            </div>
        )
    }
}
