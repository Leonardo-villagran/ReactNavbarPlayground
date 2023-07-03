import Context from '../Context/Context';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

export default () => {

  const {menu,setActive, estilos} = useContext(Context);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "mi-clase");

  const handleClick = (titulo) => {
    setActive(titulo);
  };

  const containerStyle = {
    backgroundColor: estilos.colorfondo
  };

  const containerStyle2 = {
    color: estilos.colortexto
  };

  return (
    <nav className="navbar" style={containerStyle}>
      <div className="container-fluid justify-content-start">
        <a className="navbar-brand text-white" href="/">Home</a>
          {menu.map((interno) => (
            <NavLink
              key={interno.id}
              to={`/${interno.ruta}`}
              className={setActiveClass}
              style={containerStyle2}
              onClick={() => handleClick(interno.titulo)}
            >
              {interno.titulo}
            </NavLink>
          ))}

        </div>
    </nav>
  );
};
