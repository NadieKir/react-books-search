import styles from'./Header.module.css';

function Header () {
    return (
      <header className={styles.header}>
        <div className={`${styles.container} container`} >
          <img src="img/logo.svg" alt="logo" height="50px"/>
        </div>
      </header>
    )
}

export default Header;