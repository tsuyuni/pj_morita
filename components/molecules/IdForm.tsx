import { ChangeEvent, useRef } from "react";
import styles from "../../styles/organisms/Form.module.css";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type IdFormProps = {
  
}

const IdForm = (props: IdFormProps): JSX.Element => {
  const {} = props
  const id = useRef<string>("");

  const onChangeId = (event: ChangeEvent<HTMLInputElement>): void => {
    id.current = event.target.value;
  }

  return (
    <div className={styles.block_inner}>
      <Input type="text" placeholder="ユーザーID" onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeId(e)}/>
      <Button label="次へ" onClick={() => console.log("")}/>
    </div>
  );
}

export default IdForm;
