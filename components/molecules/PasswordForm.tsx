import { ChangeEvent, MutableRefObject, useRef } from "react";
import styles from "../../styles/organisms/Form.module.css";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type PasswordFormProps = {
  proceedToNextStep: () => void,
  password: MutableRefObject<string>
}

const PasswordForm = (props: PasswordFormProps): JSX.Element => {
  const {proceedToNextStep, password} = props

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    password.current = event.target.value;
  }

  const checkPassword = () => {
    if (true) {
      proceedToNextStep();
    } else {
      console.log("No");
    }
  }

  return (
    <div className={styles.block_inner}>
      <Input type="password" placeholder="パスワード" onChange={(e: ChangeEvent<HTMLInputElement>) => onChangePassword(e)}/>
      <Button label="次へ" onClick={checkPassword}/>
    </div>
  );
}

export default PasswordForm;
