import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
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
  );
}
