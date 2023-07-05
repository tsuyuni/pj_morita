import { ChangeEvent, useRef, useState } from "react";
import styles from "../../styles/organisms/Form.module.css"; 
import EmailForm from "../molecules/EmailForm"
import IdForm from "../molecules/IdForm";
import NameForm from "../molecules/NameForm";
import PasswordForm from "../molecules/PasswordForm";
import PasswordConfirmationForm from "../molecules/PasswordConfirmationForm";

const Form = (): JSX.Element => {
  enum LoginStep {
    email,
    id,
    name,
    password,
    passwordConfirmation
  }

  const array = ["email", "id", "name", "password", "passwordConfirmation"];
  const [email, id, name, password, passwordConfirmation] = array.map(() => useRef(""));
  const [loginStep, setLoginStep] = useState(LoginStep.email);

  const proceedToNextStep = () => {
    setLoginStep(prev => prev + 1);
  }

  return (
    <div className={styles.block}>
      <h1 className={styles.block_heading}>新規登録</h1>
      {loginStep == LoginStep.email && <EmailForm proceedToNextStep={proceedToNextStep} email={email} />}
      {loginStep == LoginStep.id && <IdForm proceedToNextStep={proceedToNextStep} id={id}/>}
      {loginStep == LoginStep.name && <NameForm proceedToNextStep={proceedToNextStep} name={name} />}
      {loginStep == LoginStep.password && <PasswordForm proceedToNextStep={proceedToNextStep} password={password} />}
      {loginStep == LoginStep.passwordConfirmation && <PasswordConfirmationForm proceedToNextStep={proceedToNextStep} password={password} passwordConfirmation={passwordConfirmation} />}
    </div>
  );
}

export default Form;
