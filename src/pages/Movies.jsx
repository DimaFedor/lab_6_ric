import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { movies as moviesData } from "../data/movies";

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const availableGenres = useMemo(() => {
    const uniqueGenres = new Set(moviesData.map(movie => movie.genre));
    return ["All", ...Array.from(uniqueGenres)];
  }, []);

  const filteredMovies = useMemo(() => {
    return moviesData.filter(movie => {
      const matchesTitle = movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase());
      const matchesGenre = selectedGenre === "All" ? true : movie.genre === selectedGenre;
      return matchesTitle && matchesGenre;
    });
  }, [searchQuery, selectedGenre]);

  return (
    <div>
      <div className="card">
        <h1>Каталог</h1>

        <div className="row">
          <input
            placeholder="Пошук за назвою..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            {availableGenres.map(genreOption => (
              <option key={genreOption} value={genreOption}>{genreOption}</option>
            ))}
          </select>
        </div>

        <p className="muted">Знайдено: {filteredMovies.length}</p>
      </div>

      <div className="grid">
        {filteredMovies.map(movie => (
          <div key={movie.id} className="card">
            <h2>{movie.title}</h2>
            <p className="muted">{movie.genre} • {movie.year} • {movie.rating}</p>
            <Link className="btn" to={`/movies/${movie.id}`}>Деталі</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
