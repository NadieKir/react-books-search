import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`} >
        <NavLink to='/'> <img src={logo} alt="logo" height="40px" /></NavLink>
      </div>
    </header>
  )
}

export default Header;