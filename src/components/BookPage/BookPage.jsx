import styles from './BookPage.module.css';
import Header from '../Header/Header';
import BookContent from './BookContent/BookContent';

function BookPage() {
  return (
    <div>
      <header className={styles.header}>
        <Header />
      </header>

      <BookContent />
    </div>
  )
}

export default BookPage;