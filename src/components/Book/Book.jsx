import styles from'./Book.module.css';

function Book () {
    return (
      <a href="">
        <div className={styles['book-card']}>
          <img src='img/cover.jpg' alt='cover' className={styles['book-cover']}></img>
          <div className={styles['book-info-wrapper']}>
            <div className={styles['book-info']}>
              <p className={styles.categories}>Computers</p>
              <h3 className={styles.name}>Программирование на JavaScript</h3>
              <p className={styles.authors}>Хэнчет Эрик, Листоун Бенджамин</p>
            </div>
          </div>
        </div>
      </a>
    )
}

export default Book;