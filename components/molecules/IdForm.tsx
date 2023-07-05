import { ChangeEvent, MutableRefObject, useRef } from "react";
import styles from "../../styles/organisms/Form.module.css";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type IdFormProps = {
  proceedToNextStep: () => void,
  id: MutableRefObject<string>
}

const IdForm = (props: IdFormProps): JSX.Element => {
  const {proceedToNextStep, id} = props

  const onChangeId = (event: ChangeEvent<HTMLInputElement>): void => {
    id.current = event.target.value;
  }

  const checkId = () => {
    if (true) {
      proceedToNextStep();
    } else {
      console.log("No");
    }
  }

  return (
    <div className={styles.block_inner}>
      <Input type="text" placeholder="ユーザーID" onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeId(e)}/>
      <Button label="次へ" onClick={checkId}/>
    </div>
  );
}

export default IdForm;
