import Book from '../../Book/Book';
import Button from '../../Button/Button';
import styles from './MainContent.module.css';
import React from 'react';

function MainContent({ foundBooks }) {

  function setTitle() {
    if (foundBooks.length !== 0) {
      return (
        <div>Found <span className="yellow">{foundBooks.length}</span> results</div>
      )
    }
    return 'Nothing found'
  }

  return (
    <main className={styles.main}>
      <div className={`${styles.container} container`} >

        <h2 className={styles.heading}>{setTitle()}</h2>

        <div className={styles["books-wrapper"]}>
          {foundBooks.map(book => <Book data={book} key={book.id} />)}
        </div>

        <Button />

      </div>
    </main>
  )
}

export default MainContent;