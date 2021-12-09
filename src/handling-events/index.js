import React, { Component } from 'react'
import ExampleHandlingEvent from './example';
export default class HandlingEvent extends Component {
    handlingEvent() {
        console.log(123);
    }

    handlingEventsParams(username, age) {
        console.log(username + age);
    }

    render() {
        return (
            <div>
                <h3>Handling Events</h3>
                <button className="btn btn-success" 
                onClick = {this.handlingEvent}>
                    HandlingEvent
                </button>
                <button className="btn btn-info" 
                onClick={() => {
                    console.log(456);
                }}
                >
                    HandlingEvent
                </button>
                <button className="btn btn-danger" 
                onClick={
                    // Muốn truyền tham số vào thì phải truyền cái callback vào
                    () => {
                        this.handlingEventsParams("CyberSoft", 18);
                    }
                }
                >
                    HandlingEvents Params
                </button>

                <ExampleHandlingEvent/>
            </div>
        )
    }
}
