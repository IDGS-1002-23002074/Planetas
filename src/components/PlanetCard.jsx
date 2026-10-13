import PropTypes from "prop-types";
import "../styles/PlanetCard.css";

/**
 * PlanetCard: tarjeta reutilizable de un cuerpo del Sistema Solar.
 *
 * @param {object} props
 * @param {number} [props.id]        
 * @param {string} props.nombre      
 * @param {number} props.distancia   
 * @param {string} props.categoria   
 * @param {string} props.descripcion 
 * @param {string} props.emoji       
 * @param {string} props.color      
 */
function PlanetCard({ nombre, distancia, categoria, descripcion, emoji, color }) {
  return (
    <article className="planet" style={{ "--planet-color": color }}>
      <div className="planet__header">
        <span className="planet__emoji">{emoji}</span>
        <h2 className="planet__title">{nombre}</h2>
      </div>

      <span className="planet__badge">{categoria}</span>
      <p className="planet__description">{descripcion}</p>

      {}
      <>
        <footer className="planet__footer">
          Distancia al Sol: <strong>{distancia.toLocaleString("es-MX")}</strong> millones de km
        </footer>
      </>
    </article>
  );
}

PlanetCard.propTypes = {
  id: PropTypes.number,
  nombre: PropTypes.string.isRequired,
  distancia: PropTypes.number.isRequired,
  categoria: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default PlanetCard;
