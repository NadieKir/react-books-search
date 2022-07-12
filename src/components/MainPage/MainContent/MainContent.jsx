import React from 'react';

import Book from '../../Book/Book';
import Button from '../../../UI/Button/Button';

import styles from './MainContent.module.css';
import Loader from '../../../UI/Loader/Loader';


function MainContent({ foundBooks, loadMore, hasMore, isLoading }) {
  const renderLoadMore = () => {
    if (foundBooks && isLoading) {
      return (<Loader />);
    }

    if (hasMore) {
      return <Button value='Load more' callback={loadMore} />;
    }

    return null;
  }

  const renderContent = () => {
    if (!foundBooks && isLoading) {
      return (<Loader />);
    }

    if (!foundBooks) {
      return (<h2 className={styles.heading}>Start searching</h2>);
    }

    if (foundBooks.totalItems === 0) {
      return (<h2 className={styles.heading}>Nothing found</h2>);
    }

    return (
      <div>
        <h2 className={styles.heading}>Found <span className="yellow">{foundBooks.totalItems}</span> results</h2>

        <div className={styles["books-wrapper"]}>
          {foundBooks.items.map(book => <Book data={book} key={book.etag} />)}
        </div>
        {renderLoadMore()}
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <div className={`${styles.container} container`} >
        {renderContent()}
      </div>
    </main>
  )
}

export default MainContent;