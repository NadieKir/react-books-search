import { Link } from 'react-router-dom';
import styles from './Book.module.css';
import noCover from '../../assets/img/no-cover.jpg'

function Book(props) {
  //console.log(props.data);
  return (
    <Link to={`/book/${props.data.id}`}>
      <div className={styles['book-card']}>
        <img src={props.data.volumeInfo.imageLinks ? props.data.volumeInfo.imageLinks.thumbnail : noCover} alt='cover' className={styles['book-cover']}></img>
        <div className={styles['book-info-wrapper']}>
          <div className={styles['book-info']}>
            <p className={styles.categories}>{props.data.volumeInfo.categories ? props.data.volumeInfo.categories.join(', ') : 'Other'}</p>
            <h3 className={styles.name}>{props.data.volumeInfo.title}</h3>
            <p className={styles.authors}>{props.data.volumeInfo.authors ? props.data.volumeInfo.authors.join(', ') : 'Anonymous'}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Book;