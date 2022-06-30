import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`} >
        <NavLink to='/'> <img src="img/logo.svg" alt="logo" height="50px" /></NavLink>
      </div>
    </header>
  )
}

export default Header;