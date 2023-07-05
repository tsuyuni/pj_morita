import { ChangeEvent, useRef } from "react";
import styles from "../../styles/organisms/Form.module.css";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type EmailFormProps = {
  proceedToNextStep: () => void
}

const EmailForm = (props: EmailFormProps): JSX.Element => {
  const {proceedToNextStep} = props
  const email = useRef<string>("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    email.current = event.target.value;
  }

  const checkEmail = (): void => {
    const pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

    if (email.current.match(pattern)) {
      proceedToNextStep();
    } else {
      console.log("NO");
    }
  }

  return (
  <div className={styles.block_inner}>
      <Input type="text" placeholder="メールアドレス" onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeEmail(e)}/>
      <Button label="次へ" onClick={checkEmail}/>
    </div>
  );
}

export default EmailForm;
