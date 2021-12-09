import React, { Component } from 'react'

export default class ListKeys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: [
                { username: "Nguyen", age: 18},
                { username: "Hai", age: 20},
                { username: "Man", age: 21},
            ]
        };
    };

    renderListUser = () => {
        //Dùng map mới return về cái array mới
        return this.state.listUser.map((user, index)=>{
            return (
                //list keys thì duyệt và cần key do xài cái virtual dom
                //với lại nó duyệt nhanh hơn và key này là duy nhất
                <li key={index}>
                    username: {user.username} - age: {user.age}
                </li>
            );
        });
    };

    render() {
        return (
            <div>
                <h3>ListKeys</h3>
                <ul>
                    {
                        //nếu viết trực tiếp ở đây thì nó trả về 
                        //cái mảng xong nó render 
                        //còn viết ở hàm thì phải return qua cái hàm mới được
                        //vì return nó mới render ra các thê của HTML
                        this.renderListUser()
                    }
                </ul>
            </div>
        )
    }
}
