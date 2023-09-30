import styles from "./ZSignUp.module.css";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <form action="#" method="post">
        <div className={styles.formgroup}>
          <label for="username">用户名:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className={styles.formgroup}>
          <label for="password">密码:</label>
          <input type="password" id="passworÒd" name="password" required />
        </div>
        <button type="submit" className={styles.btn}>
          注册
        </button>
      </form>
    </div>
  );
}
