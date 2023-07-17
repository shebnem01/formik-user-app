import React, { Component } from "react";
import styles from "./UserApp.module.css";
import UserForm from "../UserForm";
import userData from "../../mock/userData.json";
import UserList from "../UserList";
export default class UserApp extends Component {
  constructor() {
    super();
    this.state = {
      users: userData,
    };
    this.addUser = this.addUser.bind(this);
  }

  addUser(values) {
    let newUser={...values,id:Date.now()}
    let newUsers = [ ...this.state.users,newUser];
    this.setState({ users: newUsers });
    console.log(values)
  }
  render() {
    return (
      <div className={styles["user-app"]}>
        <UserList users={this.state.users} />
        <UserForm addUser={this.addUser} />
      </div>
    );
  }
}
