import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import MainContent from './MainContent/MainContent';
import SearchBar from '../SearchBar/SearchBar';

import { categories, sorts } from '../../constants/constants'

import styles from './MainPage.module.css';
import { useFetching } from '../../hooks/useFetching';


function MainPage() {
  const [filter, setFilter] = useState({ query: '', category: 'any', sort: 'relevance' });
  const [fetch, loadMore, data, isLoading, hasMore] = useFetching();

  async function handleSubmit(e) {
    e.preventDefault();
    if (filter.query) {
      await fetch(filter);
    }
  }

  async function hanldleLoadMore() {
    await loadMore();
  }

  return (
    <div>
      <header className={styles.header}>
        <Header />
        <div className={`${styles["first-screen-content"]} container`}>
          <h1>A room without <span className="yellow">books</span> like a body without a soul</h1>
          <SearchBar
            filter={filter}
            setFilter={setFilter}
            handleSubmit={handleSubmit}
            categories={categories}
            sorts={sorts}
          />
        </div>
      </header>

      <MainContent
        foundBooks={data}
        loadMore={hanldleLoadMore}
        hasMore={hasMore}
        isLoading={isLoading}
      />
    </div>
  )
}

export default MainPage;