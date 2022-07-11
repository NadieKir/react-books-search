import { useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import MainContent from './MainContent/MainContent';
import SearchBar from '../SearchBar/SearchBar';

import { categories, sorts, apiKey } from '../../constants/constants'

import styles from './MainPage.module.css';


function MainPage() {
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState({ query: '', category: 'any', sort: 'relevance' });
  const [index, setIndex] = useState(0);

  // function buildRequest() {

  // }

  function handleSubmit(e) {
    e.preventDefault();

    let request = `https://www.googleapis.com/books/v1/volumes?q=intitle:${filter.query}`;
    if (filter.category !== 'any') request = request + `+subject:${filter.category}`;
    request = request + `&orderBy=${filter.sort}&key=${apiKey}&startIndex=0&maxResults=30`;

    axios.get(request)
      .then(({ data }) => {
        setResult(data);
        data.totalItems <= 30 ? setIndex(0) : setIndex(30);
      })
      .catch(err => console.log(err))

  }

  function loadMore() {
    let request = `https://www.googleapis.com/books/v1/volumes?q=intitle:${filter.query}`;
    if (filter.category !== 'any') request = request + `+subject:${filter.category}`;
    request = request + `&orderBy=${filter.sort}&key=${apiKey}&startIndex=${index}&maxResults=30`;

    axios.get(request)
      .then(({ data }) => {
        setResult({ ...result, items: result.items.concat(data.items) });
        index + 30 >= data.totalItems ? setIndex(0) : setIndex(prev => prev + 30);
      })
      .catch(err => console.log(err))

    console.log(result.totalItems)


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

      <MainContent foundBooks={result} loadMore={loadMore} index={index} />
    </div>
  )
}

export default MainPage;