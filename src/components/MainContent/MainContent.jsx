import Book from '../Book/Book';
import Button from '../Button/Button';
import styles from'./MainContent.module.css';

function MainContent () {
    return (
      <main className={styles.main}>
        <div className={`${styles.container} container`} >
          <h2 className={styles.heading}>Found <span className="yellow">363</span> results</h2>
          <div className={styles["books-wrapper"]}>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
          <Button />
        </div>
      </main>
    )
}

export default MainContent;