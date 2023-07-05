import styles from "../../styles/atoms/Input.module.css"

type InputProps = {
  type: "text" | "password",
  placeholder: string,
  onChange: any
}

const Input = (props: InputProps) => {
  const {type, placeholder, onChange} = props;

  return (
    <input type={type} placeholder={placeholder} onChange={onChange} className={styles.input}/>
  )
}

export default Input;
