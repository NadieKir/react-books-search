import styles from './BookPage.module.css';
import Header from '../Header/Header';
import BookContent from './BookContent/BookContent';
import { useParams } from 'react-router-dom';

function BookPage(props) {
  const { bookId } = useParams();

  return (
    <div>
      <header className={styles.header}>
        <Header />
      </header>

      <BookContent bookId={bookId} />
    </div>
  )
}

export default BookPage;