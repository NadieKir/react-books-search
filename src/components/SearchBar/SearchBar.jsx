import Select from '../../UI/Select/Select';

import search from '../../assets/img/search.svg'
import styles from './SearchBar.module.css';


function SearchBar({ filter, setFilter, handleSubmit, categories, sorts }) {

  return (
    <form onSubmit={handleSubmit} className={styles["search-form"]}>
      <div className={styles["form-wrapper"]}>
        <input
          value={filter.query}
          onChange={e => setFilter({ ...filter, query: e.target.value })}
          type="text"
          placeholder='Search books'
          className={styles["main-search-input"]}
        />
        <button type='submit' className={styles["search-btn"]}>
          <img src={search} alt="search" />
        </button>
      </div>
      <div className={styles["form-wrapper"]}>
        <Select
          value={filter.category}
          onChange={selectedCategory => setFilter({ ...filter, category: selectedCategory })}
          title='Categories'
          options={categories} />
        <Select
          value={filter.sort}
          onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
          title='Sort By'
          options={sorts} />
      </div>
    </form>
  )
}

export default SearchBar;