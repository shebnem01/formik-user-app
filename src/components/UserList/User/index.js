import React, { Component } from "react";
import styles from "./User.module.css";
export default class User extends Component {
  render() {
    let { id, fullName, email, photo, password } = this.props.user;
    return (
      <tr>
        <td>{id}</td>
        <td>
          <img src={photo} className={styles.img} alt="" />
        </td>

        <td>{fullName}</td>
        <td>{email}</td>
        <td>{password}</td>
      </tr>
    );
  }
}
