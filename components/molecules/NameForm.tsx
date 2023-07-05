import { ChangeEvent, MutableRefObject, useRef } from "react";
import styles from "../../styles/organisms/Form.module.css";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type NameFormProps = {
  proceedToNextStep: () => void,
  name: MutableRefObject<string>
}

const NameForm = (props: NameFormProps): JSX.Element => {
  const {proceedToNextStep, name} = props

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    name.current = event.target.value;
  }

  const checkName = () => {
    if (true) {
      proceedToNextStep();
    } else {
      console.log("No");
    }
  }

  return (
    <div className={styles.block_inner}>
      <Input type="text" placeholder="ユーザーネーム" onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeName(e)}/>
      <Button label="次へ" onClick={checkName}/>
    </div>
  );
}

export default NameForm;
