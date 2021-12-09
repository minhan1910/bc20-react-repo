import React, { Component } from 'react'

export default class ExampleHandlingEvent extends Component {
    constructor(props) {
        super(props);
        //binding
        // this.doLogin = this.doLogin.bind(this);
    }

    username = "Minh An";
    isLogin  = false;

    //Dùng es5 thì nhớ bind lại
    // doLogin() {
    //     this.isLogin = true;
    // }

    //Dùng arrow funciton thì khỏi cần bind
    doLogin = () => {
        console.log(this.isLogin);
        this.isLogin = true;
        console.log(this.isLogin);
    }

    // renderHTML() {
    //     if(this.isLogin) {
    //         return (
    //             <div>
    //                 <h1>{this.username}</h1>
    //                 <button className="btn btn-danger">Logout</button>
    //             </div>
    //         );
    //     } else {
    //         return(
    //             <div>
    //                 <h1>Vui lòng login</h1>
    //                 <button className="btn btn-success">Login</button>
    //             </div>
    //         );
    //     }
    // }
    
    renderHTML() {
        return this.isLogin ? ( <div>
                                    <h1>{this.username}</h1>
                                    <button className="btn btn-danger">Logout</button>
                                </div>
                        ) : (
                                <div>
                                    <h1>Vui lòng login</h1>
                                    <button className="btn btn-success" onClick={this.doLogin}>Login</button>
                                </div>
                        );
    }

    render() {
        return (
            <div>
                <h3>ExampleHandlingEvent</h3>
                {this.renderHTML()}
            </div>
        );
    }
}
