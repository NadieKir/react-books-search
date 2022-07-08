import styles from './Button.module.css';

function Button({ value, callback }) {
  return (
    <button onClick={callback} className={styles.button}>{value}</button>
  )
}

export default Button;