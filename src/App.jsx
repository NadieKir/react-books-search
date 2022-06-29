import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import SearchBar from './components/SearchBar/SearchBar';

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
      
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
