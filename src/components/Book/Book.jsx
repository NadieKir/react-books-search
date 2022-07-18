import { Link } from 'react-router-dom';

import styles from './Book.module.css';
import noCover from '../../assets/img/no-cover.jpg'


function Book({ data, onClick }) {
  const title = data.volumeInfo.title ?? 'No title';
  const limitedTitle = title.length > 70 ? title.substring(0, 70) + '...' : title;

  return (
    <Link to={`/book/${data.id}`}>
      <div className={styles['book-card']} id={data.id} onClick={onClick}>
        <img src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : noCover} alt='cover' className={styles['book-cover']}></img>
        <div className={styles['book-info-wrapper']}>
          <div className={styles['book-info']}>
            <p className={styles.categories}>{data.volumeInfo.categories ? data.volumeInfo.categories.join(', ') : 'Other'}</p>
            <h3 className={styles.name} title={title}> {limitedTitle} </h3>
            <p className={styles.authors}>{data.volumeInfo.authors ? data.volumeInfo.authors.join(', ') : 'Anonymous'}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Book;