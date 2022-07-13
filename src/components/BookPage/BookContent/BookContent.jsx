import Loader from '../../../UI/Loader/Loader';

import styles from './BookContent.module.css';
import noCover from '../../../assets/img/no-cover.jpg'


function BookContent({ result, isLoading }) {
  return (
    <main className={styles.main}>
      <div className={`${styles.container} container`}>

        {isLoading
          ? <Loader />
          : (<div className={styles["content-container"]}>
            <img src={result.imageLinks ? result.imageLinks.smallThumbnail : noCover} alt='cover' className={styles['book-cover']} />
            <div className={styles["book-info"]}>
              <p className={styles.categories}>{result.categories ? result.categories[0].split('/')[0] : 'Other'}</p>
              <h3 className={styles.name}>{result.title}</h3>
              <p className={styles.authors}>{result.authors ? result.authors.join(', ') : 'Anonymous'}</p>
              <p className={styles.description} dangerouslySetInnerHTML={{ __html: result.description }}></p>
            </div>
          </div>)
        }

      </div>
    </main>
  )
}

export default BookContent;