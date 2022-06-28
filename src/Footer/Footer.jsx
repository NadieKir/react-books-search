import styles from'./Footer.module.css';

function Footer () {
    return (
      <footer className={styles.footer}>
        <div className={`${styles.container} container`} >
          <img src="img/logo.svg" alt="logo" height="36px"/>
          <div className={styles['github-wrapper']}>
            <img src="img/github.svg" alt="github" />
            <span>NadieKir</span>
          </div>
        </div>
      </footer>
    )
}

export default Footer;