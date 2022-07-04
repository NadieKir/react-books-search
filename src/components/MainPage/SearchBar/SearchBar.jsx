import styles from './SearchBar.module.css';

function SearchBar(props) {

  return (
    <form onSubmit={props.handleSubmit} action="" className={styles["search-form"]}>
      <div className={styles["form-wrapper"]}>
        <input onChange={props.handleChange} type="text" placeholder='Search books' className={styles["main-search-input"]} />
        <button type='submit' className={styles["search-btn"]}>
          <img src="img/search.svg" alt="search" />
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