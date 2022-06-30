import styles from './MainPage.module.css';
import Header from '../Header/Header';
import MainContent from './MainContent/MainContent';
import SearchBar from './SearchBar/SearchBar';

function MainPage() {
  return (
    <div>
      <header className={styles.header}>
        <Header />
        <div className={`${styles["first-screen-content"]} container`}>
          <h1>A room without <span className="yellow">books</span> like a body without a soul</h1>
          <SearchBar />
        </div>
      </header>

      <MainContent />
    </div>
  )
}

export default MainPage;