import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderListUser = () => {
    return this.props.listUser.map((user) => {
      return (<UserItem 
        user={user}
        deleteUser={this.props.deleteUser}
        key={1}
      />)
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {/* <UserItem />
            <UserItem />
            <UserItem /> */}
            {
              this.renderListUser()
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
