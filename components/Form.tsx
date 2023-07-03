import { useRef } from "react";
import Button from "../atoms/Button";
import styles from "../styles/Form.module.css"

const Form = (): JSX.Element => {
  const email = useRef<string>("");

  const checkEmail = () => {
    const pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    if (email.current.match(pattern)) {
      console.log("OK");
    } else {
      console.log("NO");
    }
  }

  return (
    <div className={styles.block}>
      <h1>Login</h1>
      <input type="text" placeholder="メールアドレス" onChange={(event) => {
        email.current = event.target.value
      }}/>
      <Button label="次へ" onClick={checkEmail}/>
    </div>
  )
}

export default Form;
