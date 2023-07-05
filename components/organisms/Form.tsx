import { ChangeEvent, useRef, useState } from "react";
import styles from "../../styles/organisms/Form.module.css"; 
import EmailForm from "../molecules/EmailForm"
import IdForm from "../molecules/IdForm";

const Form = (): JSX.Element => {
  enum LoginStep {
    email,
    id,
    name,
    password,
    passwordConfirmation
  }

  const [loginStep, setLoginStep] = useState(LoginStep.email);

  const proceedToNextStep = () => {
    setLoginStep(prev => prev + 1);
  }

  return (
    <div className={styles.block}>
      <h1 className={styles.block_heading}>ログイン</h1>
      {loginStep == LoginStep.email && <EmailForm proceedToNextStep={proceedToNextStep} />}
      {loginStep == LoginStep.id && <IdForm />}
    </div>
  );
}

export default Form;
