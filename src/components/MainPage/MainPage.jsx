import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Header from '../Header/Header';
import MainContent from './MainContent/MainContent';
import SearchBar from '../SearchBar/SearchBar';

import { categories, sorts } from '../../constants/constants'
import { useFetching } from '../../hooks/useFetching';

import styles from './MainPage.module.css';


function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({ query: '', category: 'any', sort: 'relevance' });
  const [fetch, loadMore, loadToIndex, data, isLoading, hasMore] = useFetching();

  useEffect(() => {
    (async function initialSetup() {
      const query = searchParams.get('query');
      const category = searchParams.get('category');
      const sort = searchParams.get('sort');
      const index = searchParams.get('index');
      const bookId = searchParams.get('bookId');

      if (query && category && sort && index) {
        const initialFilter = { query, category, sort };
        setFilter(initialFilter);
        await loadToIndex(initialFilter, Number(index));
        if (bookId) {
          document.getElementById(bookId).scrollIntoView({ block: "center", behavior: "smooth" });
        }
      }
    })()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();
    if (filter.query) {
      await fetch(filter);
      setSearchParams({ ...filter, index: 30 });
    }
  }

  async function hanldleLoadMore() {
    const loadMoreIndex = await loadMore();
    setSearchParams({ ...filter, index: loadMoreIndex });
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
        onBookClick={(bookId) => {
          const query = searchParams.get('query');
          const category = searchParams.get('category');
          const sort = searchParams.get('sort');
          const index = searchParams.get('index');

          setSearchParams({ query, category, sort, index, bookId });
        }}
      />
    </div>
  )
}

export default MainPage;