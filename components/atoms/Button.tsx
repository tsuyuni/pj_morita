import { MutableRefObject } from "react";
import styles from "../../styles/atoms/Button.module.css";

type ButtonProps = {
  label: string,
  onClick: any
}

const Button = (props: ButtonProps): JSX.Element => {
  const {label, onClick} = props
  return (
    <button onClick={onClick} className={styles.button}>{label}</button>
  )
}

export default Button;
