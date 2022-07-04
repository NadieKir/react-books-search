import styles from './MainPage.module.css';
import Header from '../Header/Header';
import MainContent from './MainContent/MainContent';
import SearchBar from './SearchBar/SearchBar';
import axios from 'axios';
import { useState } from 'react';

function MainPage() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  const apiKey = 'AIzaSyBDHC44j_bDgGn_XY6u0h8NiyUkKeWw0qc';

  function handleSubmit(e) {
    e.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}&maxResults=30`)
      .then(data => setResult(data.data.items))
      .catch(err => console.log(err))
  }

  function handleChange(e) {
    let search = e.target.value;
    setSearch(search);
  }

  return (
    <div>
      <header className={styles.header}>
        <Header />
        <div className={`${styles["first-screen-content"]} container`}>
          <h1>A room without <span className="yellow">books</span> like a body without a soul</h1>
          <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
      </header>

      <MainContent foundBooks={result} />
    </div>
  )
}

export default MainPage;