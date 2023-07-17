import React, { Component } from "react";
import User from "./User";
import styles from './UserList.module.css'
export default class UserList extends Component {

  render() {
    let {users}=this.props;
    let userList = users.map((user, id) => <User key={id} user={user} />);

    return (
      <>
      <h2 className={styles.title}>User Info</h2>
        <table className={styles["user-list"]}>
      <thead>
        <tr>
        <th>
          ID:
        </th>
          <th>Img</th>
          <th>Fullname</th>
          <th>Email address</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>{userList}</tbody>
    </table>
      </>
    );
  }
}
