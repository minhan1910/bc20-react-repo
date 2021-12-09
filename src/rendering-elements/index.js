//rcc => class
//rfc => funciton

import React, { Component, Fragment } from 'react'

export default class RenderingElements extends Component {
    username = "Cybersoft";
    age = 18;
    lop = "BC20";

    renderInfo() {
        return (
            //hoặc import fragment vào nó cũng như thẻ ảo <>
            //Thẻ ảo đỡ bị lỗi thì giờ đây 2 thẻ p nó vẫn ngang hàng với thẻ h3
            <Fragment>
                <p>{this.username} - {this.age}</p>
                <p>Lop: {this.lop}</p>
            </Fragment>
        )
    }
     
    //render nó luôn chạy
    //phương thức đặc biệt trong component của react
    render() {
        return (
            <div>
                <h3>*RenderingElements</h3>
                {this.renderInfo()}
            </div>
        )
    }
}

