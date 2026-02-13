import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="card">
      <h1>404</h1>
      <p>Сторінку не знайдено.</p>
      <Link className="btn" to="/">На головну</Link>
    </div>
  );
}
