import styles from "@/styles/SignUp.module.css";
import SignUp  from "../component/ZSignUp";

export default function SignUpPage() {
  return (
    <>
      <div className={styles.main}>
        <SignUp />
      </div>
    </>
  );
}
