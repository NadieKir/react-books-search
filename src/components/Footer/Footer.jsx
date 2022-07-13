import styles from './Footer.module.css';
import logo from '../../assets/img/logo.svg'
import github from '../../assets/img/github.svg'


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`} >
        <img src={logo} alt="logo" height="36px" />
        <div className={styles['github-wrapper']}>
          <img src={github} alt="github" />
          <span>NadieKir</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;