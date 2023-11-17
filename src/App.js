import {
  BrowserRouter, Route, Routes, NavLink,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';

import Categories from './components/Categories';
import Books from './components/Books';
import { fetchGetBooks } from './redux/books/bookSlice';
import { FaceIcon } from './icons';
import Fourpage from './404page';

function App() {
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.book);
  useEffect(() => {
    dispatch(fetchGetBooks('random'));
  }, [dispatch]);

  return (
    <div className="App">

      <BrowserRouter className="browser" basename="rjs-bookstore-khanh">
        <header className="header">
          <h1 className="header-h1">
            Bookstore CMS
          </h1>
          <ul className="header-ul">
            <li>
              <NavLink
                className="header-ul-link"
                to="/"
                style={({ isActive }) => (isActive ? { opacity: 1 } : { opacity: 0.5 })}
              >
                BOOKS
                (
                {amount}
                )
              </NavLink>
            </li>
            <li>
              <NavLink
                className="header-ul-link"
                to="/categories"
                style={({ isActive }) => (isActive ? { opacity: 1 } : { opacity: 0.5 })}
              >
                CATEGORIES
              </NavLink>
            </li>
          </ul>

          <span className="header-icon"><FaceIcon /></span>
        </header>

        <Routes>
          <Route path="/" element={<Books />} />
          <Route
            path="/categories"
            element={<Categories />}
          />
          <Route path="*" element={<Fourpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
