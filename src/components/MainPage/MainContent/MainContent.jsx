import Book from '../../Book/Book';
import Button from '../../Button/Button';
import styles from './MainContent.module.css';
import React from 'react';

function MainContent({ foundBooks, loadMore, index }) {
  return (
    <main className={styles.main}>
      <div className={`${styles.container} container`} >

        {foundBooks.length === 0 ? (
          <h2 className={styles.heading}>Start searching</h2>
        ) :
          foundBooks.totalItems === 0 ?
            (<h2 className={styles.heading}>Nothing found</h2>)
            :
            (
              <div>
                <h2 className={styles.heading}>Found <span className="yellow">{foundBooks.totalItems}</span> results</h2>

                <div className={styles["books-wrapper"]}>
                  {foundBooks.items.map(book => <Book data={book} key={book.etag} />)}
                </div>

                {index !== 'end' && <Button callback={loadMore} />}
              </div>
            )}

      </div>
    </main >
  )
}

export default MainContent;