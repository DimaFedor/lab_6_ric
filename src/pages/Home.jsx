import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="card">
      <h1>MovieShelf (SPA)</h1>
      <p>
        Це Single Page Application
      </p>
      <Link className="btn" to="/movies">Перейти до каталогу</Link>
    </div>
  );
}
