import React from 'react';

import Book from '../../Book/Book';
import Button from '../../../UI/Button/Button';

import styles from './MainContent.module.css';
import Loader from '../../../UI/Loader/Loader';


function MainContent({ foundBooks, loadMore, index, isLoadingSearch, isLoadingMore }) {
  return (
    <main className={styles.main}>
      <div className={`${styles.container} container`} >
        {isLoadingSearch
          ? <Loader />
          : foundBooks.length === 0 ? (
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

                  {isLoadingMore
                    ? <Loader />
                    : index !== 0 && <Button value='Load more' callback={loadMore} />
                  }


                </div>
              )
        }


      </div>
    </main>
  )
}

export default MainContent;