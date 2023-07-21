import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <header className="header">
          <h1>
            SECRET FOREST
          </h1>
          <ul className="header-ul">
            <li><Link className="header-ul-link" to="/">Books</Link></li>
            <li><Link className="header-ul-link" to="/categories">Categories</Link></li>
          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
