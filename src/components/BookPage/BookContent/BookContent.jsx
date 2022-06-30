import styles from './BookContent.module.css';

function BookContent() {
  return (
    <main className={styles.main}>
      <div className={`${styles.container} container`}>
        <img src='img/cover.jpg' alt='cover' className={styles['book-cover']} />
        <div className={styles["book-info"]}>
          <p className={styles.categories}>Computers</p>
          <h3 className={styles.name}>Программирование на JavaScript</h3>
          <p className={styles.authors}>Хэнчет Эрик, Листоун Бенджамин</p>
          <p className={styles.description}>Шрифты Google Fonts страшно популярны. Их загружают более 42,8 миллиона сайтов, в том числе Хабр. Библиотека Google Fonts содержит 1023 свободных шрифта и программные интерфейсы для их внедрения через CSS. Очень удобно, казалось бы.
            Во многих статьях отмечалось, в какую цену обходятся многочисленные запросы через API. Совет самостоятельно хостить шрифты дают много лет. Даже сама Google давала такой совет на конференции Google I/O 2018 года в выступлении на тему веб-производительности.</p>
        </div>
      </div>
    </main>
  )
}

export default BookContent;