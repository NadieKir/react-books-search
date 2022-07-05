import { NavLink } from 'react-router-dom';
import styles from './Book.module.css';

function Book(props) {
  console.log(props.data);
  return (
    <NavLink to={`/book/${props.data.id}`}>
      <div className={styles['book-card']}>
        <img src={props.data.volumeInfo.imageLinks ? props.data.volumeInfo.imageLinks.thumbnail : 'img/no-cover.jpg'} alt='cover' className={styles['book-cover']}></img>
        <div className={styles['book-info-wrapper']}>
          <div className={styles['book-info']}>
            <p className={styles.categories}>{props.data.volumeInfo.categories ? props.data.volumeInfo.categories.join(' ,') : 'Other'}</p>
            <h3 className={styles.name}>{props.data.volumeInfo.title}</h3>
            <p className={styles.authors}>{props.data.volumeInfo.authors ? props.data.volumeInfo.authors.join(' ,') : 'Anonymous'}</p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Book;