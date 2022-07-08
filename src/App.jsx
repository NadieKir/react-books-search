import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookPage from './components/BookPage/BookPage';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/book/:bookId" element={<BookPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
