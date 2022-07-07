import styles from './MainPage.module.css';
import Header from '../Header/Header';
import MainContent from './MainContent/MainContent';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import { useState } from 'react';

function MainPage() {
  const categories = [
    { value: 'any', name: 'Any' },
    { value: 'architechture', name: 'Architechture' },
    { value: 'art', name: 'Art' },
    { value: 'bibles', name: 'Bibles' },
    { value: 'computers', name: 'Computers' },
    { value: 'cooking', name: 'Cooking' },
    { value: 'design', name: 'Design' },
    { value: 'drama', name: 'Drama' },
    { value: 'education', name: 'Education' },
    { value: 'fiction', name: 'Fiction' },
    { value: 'history', name: 'History' },
    { value: 'humor', name: 'Humor' },
    { value: 'medical', name: 'Medical' },
    { value: 'nature', name: 'Nature' },
    { value: 'pets', name: 'Pets' },
    { value: 'poetry', name: 'Poetry' },
    { value: 'religion', name: 'Religion' },
    { value: 'science', name: 'Science' },
  ];

  const sorts = [
    { value: 'relevance', name: 'Relevance' },
    { value: 'newest', name: 'Newest' },
  ]

  const apiKey = 'AIzaSyBDHC44j_bDgGn_XY6u0h8NiyUkKeWw0qc';

  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState({ query: '', category: 'any', sort: 'relevance' });
  const [index, setIndex] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    let request = `https://www.googleapis.com/books/v1/volumes?q=intitle:${filter.query}`;
    if (filter.category !== 'any') request = request + `+subject:${filter.category}`;
    request = request + `&orderBy=${filter.sort}&key=${apiKey}&startIndex=0&maxResults=30`;

    axios.get(request)
      .then(data => setResult(data.data))
      .catch(err => console.log(err))

    setIndex(30);
  }

  function loadMore() {
    let request = `https://www.googleapis.com/books/v1/volumes?q=intitle:${filter.query}`;
    if (filter.category !== 'any') request = request + `+subject:${filter.category}`;
    request = request + `&orderBy=${filter.sort}&key=${apiKey}&startIndex=${index}&maxResults=30`;

    axios.get(request)
      .then(data => setResult({ ...result, items: result.items.concat(data.data.items) }))
      .catch(err => console.log(err))

    if ((index + 30) > result.totalItems) setIndex('end');
    else setIndex(prev => prev + 30);
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