import Book from '../../Book/Book';
import Button from '../../Button/Button';
import styles from './MainContent.module.css';

function MainContent(props) {
  function setTitle() {
    if (props.foundBooks.length !== 0) {
      return (
        <h2 className={styles.heading}>Found <span className="yellow">{props.foundBooks.length}</span> results</h2>
      )
    } else {
      return (
        <h2 className={styles.heading}>Start searching books</h2>
      )
    }
  }

  return (
    <main className={styles.main}>
      <div className={`${styles.container} container`} >

        {setTitle()}

        <div className={styles["books-wrapper"]}>
          {props.foundBooks.map(book => <Book data={book} key={book.id} />)}
        </div>

        <Button />
      </div>
    </main>
  )
}

export default MainContent;