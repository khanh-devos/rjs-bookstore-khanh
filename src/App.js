import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';

import Categories from './components/Categories';
import Books from './components/Books';
import { fetchGetBooks } from './redux/books/bookSlice';

function App() {
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.book);
  useEffect(() => {
    dispatch(fetchGetBooks('random'));
  }, [dispatch]);

  return (
    <div className="App">

      <BrowserRouter>
        <header className="header">
          <h1>
            SECRET FOREST
          </h1>
          <ul className="header-ul">
            <li>
              <Link className="header-ul-link" to="/">
                Books
                (
                {amount}
                )
              </Link>
            </li>
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
