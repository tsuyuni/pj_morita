import { ChangeEvent, MutableRefObject, useRef } from "react";
import styles from "../../styles/organisms/Form.module.css";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type PasswordConfirmationFormProps = {
  proceedToNextStep: () => void,
  password: MutableRefObject<string>,
  passwordConfirmation: MutableRefObject<string>
}

const PasswordConfirmationForm = (props: PasswordConfirmationFormProps): JSX.Element => {
  const {proceedToNextStep, password, passwordConfirmation} = props

  const onChangePasswordConfirmation = (event: ChangeEvent<HTMLInputElement>): void => {
    passwordConfirmation.current = event.target.value;
  }

  const checkPasswordConfirmation = () => {
    if (password.current == passwordConfirmation.current) {
      proceedToNextStep();
    } else {
      console.log("No");
    }
  }

  return (
    <div className={styles.block_inner}>
      <Input type="password" placeholder="パスワード（確認）" onChange={(e: ChangeEvent<HTMLInputElement>) => onChangePasswordConfirmation(e)}/>
      <Button label="次へ" onClick={checkPasswordConfirmation}/>
    </div>
  );
}

export default PasswordConfirmationForm;
