import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../Header/Header';
import BookContent from './BookContent/BookContent';

import styles from './BookPage.module.css';
import BookService from '../../services/BookService'


function BookPage() {
  const { bookId } = useParams();
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await BookService.getBook(bookId);
        setResult(data.data.volumeInfo);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [bookId])

  return (
    <div>
      <header className={styles.header}>
        <Header />
      </header>

      <BookContent result={result} isLoading={isLoading} />
    </div>
  )
}

export default BookPage;