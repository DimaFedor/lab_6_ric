import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <header className="topbar">
        <div className="brand">MovieShelf</div>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            Головна
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => isActive ? "active" : ""}>
            Каталог
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            Про застосунок
          </NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
