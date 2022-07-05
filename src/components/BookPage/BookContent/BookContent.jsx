import styles from './BookContent.module.css';
import axios from 'axios';
import { useState } from 'react';

function BookContent(props) {
  const [result, setResult] = useState({});

  const apiKey = 'AIzaSyBDHC44j_bDgGn_XY6u0h8NiyUkKeWw0qc';

  axios.get(`https://www.googleapis.com/books/v1/volumes/${props.bookId}?key=${apiKey}`)
    .then(data => { console.log(data); setResult(data.data.volumeInfo) })
    .catch(err => console.log(err))

  return (
    <main className={styles.main}>
      <div className={`${styles.container} container`}>
        <img src={result.imageLinks ? result.imageLinks.smallThumbnail : 'img/no-cover.jpg'} alt='cover' className={styles['book-cover']} />
        <div className={styles["book-info"]}>
          <p className={styles.categories}>{result.categories ? result.categories.join(' ,') : 'Other'}</p>
          <h3 className={styles.name}>{result.title}</h3>
          <p className={styles.authors}>{result.authors ? result.authors.join(' ,') : 'Anonymous'}</p>
          <p className={styles.description}>{result.description}</p>
        </div>
      </div>
    </main>
  )
}

export default BookContent;