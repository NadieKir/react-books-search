import styles from './SearchBar.module.css';
import search from '../../assets/img/search.svg'

function SearchBar({ handleSubmit, handleChange }) {

  return (
    <form onSubmit={handleSubmit} className={styles["search-form"]}>
      <div className={styles["form-wrapper"]}>
        <input onChange={handleChange} type="text" placeholder='Search books' className={styles["main-search-input"]} />
        <button type='submit' className={styles["search-btn"]}>
          <img src={search} alt="search" />
        </button>
      </div>
      <div className={styles["form-wrapper"]}>
        <div className={styles["input-wrapper"]}>
          <span>Categories</span>
          <select>
            <option>Пункт 1</option>
            <option>Пункт 2</option>
          </select>
        </div>
        <div className={styles["input-wrapper"]}>
          <span>Sort by</span>
          <select>
            <option>Пункт 1</option>
            <option>Пункт 2</option>
          </select>
        </div>
      </div>
    </form>
  )
}

export default SearchBar;