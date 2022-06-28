import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
        <div className="first-screen-content container">
          <h1>A room without <span className="yellow">books</span> like a body without a soul</h1>
          <SearchBar />
        </div>
      </header>
      

      <Footer />
    </div>
  );
}

export default App;
