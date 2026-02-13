import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { movies as data } from "../data/movies";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");

  const genres = useMemo(() => {
    const set = new Set(data.map(m => m.genre));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return data.filter(m => {
      const byTitle = m.title.toLowerCase().includes(query.trim().toLowerCase());
      const byGenre = genre === "All" ? true : m.genre === genre;
      return byTitle && byGenre;
    });
  }, [query, genre]);

  return (
    <div>
      <div className="card">
        <h1>Каталог</h1>

        <div className="row">
          <input
            placeholder="Пошук за назвою..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            {genres.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        <p className="muted">Знайдено: {filtered.length}</p>
      </div>

      <div className="grid">
        {filtered.map(m => (
          <div key={m.id} className="card">
            <h2>{m.title}</h2>
            <p className="muted">{m.genre} • {m.year} • {m.rating}</p>
            <Link className="btn" to={`/movies/${m.id}`}>Деталі</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
