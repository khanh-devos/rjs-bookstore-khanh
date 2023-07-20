import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Authors from './components/Authors';
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
            <li><Link className="header-ul-link" to="/authors">Authors</Link></li>
          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
