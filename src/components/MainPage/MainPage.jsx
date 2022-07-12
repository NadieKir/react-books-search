import { useState, useRef } from 'react';

import Header from '../Header/Header';
import MainContent from './MainContent/MainContent';
import SearchBar from '../SearchBar/SearchBar';
import BookService from '../../services/BookService'

import { categories, sorts } from '../../constants/constants'

import styles from './MainPage.module.css';
import { useFetching } from '../../hooks/useFetching';


function MainPage() {
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState({ query: '', category: 'any', sort: 'relevance' });
  const [index, setIndex] = useState(0);
  //const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isSearchBtnPressed, setIsSearchBtnPressed] = useState(false);
  const [isLoadBtnPressed, setIsLoadBtnPressed] = useState(false);
  //const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  const currFilter = useRef();
  currFilter.current = filter;

  const currResult = useRef();
  currResult.current = result;

  const [isLoadingSearch] = useFetching(async () => {
    const data = await BookService.getBooks(currFilter.current, 0);
    setResult(data);
    data.totalItems <= 30 ? setIndex(0) : setIndex(30);
  }, isSearchBtnPressed);

  const [isLoadingMore] = useFetching(async () => {
    console.log(index)
    const data = await BookService.getBooks(currFilter.current, index);
    setResult({ ...currResult.current, items: currResult.current.items.concat(data.items) });
    index + 30 >= data.totalItems ? setIndex(0) : setIndex(prev => prev + 30);
  }, isLoadBtnPressed);



  // дописать асинк
  function handleSubmit(e) {
    e.preventDefault();
    if (filter.query) {
      setIsSearchBtnPressed(prev => !prev);
      // try {
      //   setIsLoadingSearch(true);
      //   const data = await BookService.getBooks(filter, 0);
      //   setResult(data);
      //   data.totalItems <= 30 ? setIndex(0) : setIndex(30);
      // } catch (err) {
      //   console.log(err)
      // } finally {
      //   setIsLoadingSearch(false)
      // }
    }
  }

  function loadMore() {
    setIsLoadBtnPressed(prev => !prev);

    // try {
    //   setIsLoadingMore(true);
    //   const data = await BookService.getBooks(filter, index);
    //   setResult({ ...result, items: result.items.concat(data.items) });
    //   index + 30 >= data.totalItems ? setIndex(0) : setIndex(prev => prev + 30);
    // } catch (err) {
    //   console.log(err)
    // } finally {
    //   setIsLoadingMore(false)
    // }
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
        foundBooks={result}
        loadMore={loadMore}
        index={index}
        isLoadingSearch={isLoadingSearch}
        isLoadingMore={isLoadingMore}
      />
    </div>
  )
}

export default MainPage;