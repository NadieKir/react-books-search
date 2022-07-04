import { NavLink } from 'react-router-dom';
import styles from './Book.module.css';

function Book(props) {
  console.log(props.data);
  return (
    <NavLink to='/book'>
      <div className={styles['book-card']}>
        <img src={props.data.imageLinks ? props.data.imageLinks.smallThumbnail : 'img/no-cover.jpg'} alt='cover' className={styles['book-cover']}></img>
        <div className={styles['book-info-wrapper']}>
          <div className={styles['book-info']}>
            <p className={styles.categories}>{props.data.categories ? props.data.categories.join(' ,') : 'Other'}</p>
            <h3 className={styles.name}>{props.data.title}</h3>
            <p className={styles.authors}>{props.data.authors ? props.data.authors.join(' ,') : 'Anonymous'}</p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Book;