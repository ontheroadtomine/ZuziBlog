import styles from "./SignUp.module.css";
import axios from "axios";
import React from "react";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handlerSubmit(e) {
    e.preventDefault();
    const res = await axios.post("/api/signup", {
      username,
      password,
    });
    if (res.status === 200) {
      alert("注册成功");
    }
  }

  return (
    <div className={styles.container}>
      <form method="post">
        <div className={styles.formgroup}>
          <label for="username">用户名:</label>
          <input type="text" id="username" name="username" value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
        </div>
        <div className={styles.formgroup}>
          <label for="password">密码:</label>
          <input type="password" id="password" name="password"
            onChange={(e) => setPassword(e.target.value)}
            required value={password} />
        </div>
        <button type="submit" onClick={handlerSubmit} className={styles.btn}>
          注册
        </button>
      </form>
    </div>
  );
}
