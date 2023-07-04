import { ChangeEvent, useRef } from "react";
import styles from "../../styles/organisms/Form.module.css";
import Button from "../atoms/Button";

type IdFormProps = {
  
}

const IdForm = (props: IdFormProps): JSX.Element => {
  const {} = props
  const id = useRef<string>("");

  const onChangeId = (event: ChangeEvent<HTMLInputElement>): void => {
    id.current = event.target.value;
  }

  return (
    <div className={styles.block}>
      <h1>Login</h1>
      <input type="text" placeholder="メールアドレス" onChange={(e) => onChangeId(e)}/>
      <Button label="次へ" onClick={() => console.log("")}/>
    </div>
  );
}

export default IdForm;
