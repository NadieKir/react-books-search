import styles from './BookPage.module.css';
import Header from '../Header/Header';
import BookContent from './BookContent/BookContent';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function BookPage() {
  const { bookId } = useParams();

  const [result, setResult] = useState({});

  const apiKey = 'AIzaSyBDHC44j_bDgGn_XY6u0h8NiyUkKeWw0qc';

  axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`)
    .then(data => setResult(data.data.volumeInfo))
    .catch(err => console.log(err))

  return (
    <div>
      <header className={styles.header}>
        <Header />
      </header>

      <BookContent result={result} />
    </div>
  )
}

export default BookPage;