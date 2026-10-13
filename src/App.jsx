import { useState } from "react";

import PLANETS from "./data/planets";
import PlanetCard from "./components/PlanetCard";
import CategoryFilter from "./components/CategoryFilter";

const CATEGORIAS_UNICAS = [...new Set(PLANETS.map((p) => p.categoria))];

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const planetasFiltrados =
    categoriaActiva === "Todos"
      ? PLANETS
      : PLANETS.filter((p) => p.categoria === categoriaActiva);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Sistema Solar</h1>
        <p>Conoce los planetas y planetas enanos que giran alrededor del Sol</p>
      </header>

      <CategoryFilter
        categorias={CATEGORIAS_UNICAS}
        categoriaActiva={categoriaActiva}
        onSeleccionar={setCategoriaActiva}
      />

      <main className="cards-grid">
        {planetasFiltrados.length > 0 ? (
          planetasFiltrados.map((planeta) => (
            <PlanetCard key={planeta.id} {...planeta} />
          ))
        ) : (
          <p className="no-results">No hay cuerpos celestes para este filtro.</p>
        )}
      </main>
    </div>
  );
}

export default App;
