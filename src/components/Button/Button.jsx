import styles from './Button.module.css';

function Button({ callback }) {
  return (
    <button onClick={callback} className={styles.button}>Load more</button>
  )
}

export default Button;