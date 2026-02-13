import React from "react";
import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return (
      <div className="card">
        <h1>Фільм не знайдено</h1>
        <Link className="btn" to="/movies">Назад до каталогу</Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h1>{movie.title}</h1>
      <p><b>Жанр:</b> {movie.genre}</p>
      <p><b>Рік:</b> {movie.year}</p>
      <p><b>Рейтинг:</b> {movie.rating}</p>

      <div className="row">
        <Link className="btn" to="/movies">Назад</Link>
        <Link className="btn secondary" to="/">Головна</Link>
      </div>
    </div>
  );
}
