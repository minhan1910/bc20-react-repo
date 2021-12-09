import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Minh An",
            isLogin: false,
        };
    }   

    doLogin = () => {
        //Không gán trực tiếp đc phải dùng của state
        // console.log(this.state.isLogin);
        // this.state.isLogin = true;
        // console.log(this.state.isLogin);

        //cập nhập lại trực tiếp trong state
        //lol setState làm bất đồng bộ
        //
        this.setState ({
            isLogin: true,
        }, () => {
            console.log(this.state.isLogin);
        });

        console.log(this.state.isLogin);
    };

    doLogout = () => {
        this.setState ({
            isLogin: false
        })
    }

    renderHTML() {
        return this.state.isLogin ? ( <div>
                                    <h1>{this.state.username}</h1>
                                    <button className="btn btn-danger" onClick={this.doLogout}>Logout</button>
                                </div>
                        ) : (
                                <div>
                                    <h1>Vui lòng login</h1>
                                    <button className="btn btn-success" onClick={this.doLogin}>Login</button>
                                </div>
                        );
    }

    //state thay đổi thì hàm render 
    //chỉ render cái trong state chứ mấy cái thẻ khác
    //nó vẫn bth không bị ảnh hưởng nên performance vẫn y nguyên
    render() {
        console.log("render");
        return (
            <div>
                <h3>State</h3>
                {this.renderHTML()};
            </div>
        )
    }
}
