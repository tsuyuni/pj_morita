import styles from "../../styles/atoms/Input.module.css"

const Input = (props: any) => {
  const {type, placeholder, onChange} = props;

  return (
    <input type={type} placeholder={placeholder} onChange={onChange} className={styles.input}/>
  )
}

export default Input;
