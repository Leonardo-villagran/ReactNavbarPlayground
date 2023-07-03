import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Context from '../Context/Context';
import React, { useContext } from 'react';

export default () => {
  const navigate = useNavigate();

  const {menu, setMenu, estilos, setEstilos} = useContext(Context);

  const [titulo, setTitulo] = useState('');
  const [ruta, setRuta] = useState('');
  const [colorfondo, setColorfondo]=useState('');
  const [colortexto, setColortexto] = useState('');
  const [error, setError] = useState('');

  const agregarNoticia = async (titulo, ruta) => {
    try {
      await axios.post('http://localhost:3000/noticias', { titulo, ruta });

      await axios.get('http://localhost:3000/noticias').then(response => { setMenu(response.data);})

    } catch (error) {
      console.log(error);
    }
  };

  const actualizarEstilos = async (colorfondo, colortexto) => {
    try {
      await axios.put('http://localhost:3000/estilo', { colorfondo, colortexto });

      setEstilos({id:1, colorfondo, colortexto});
      setTitulo([]);
      setRuta([]);
      setColorfondo([]);
      setColortexto([]);


    } catch (error) {
      console.log(error);
    }
  };

  const handleAgregar = async () => {
    if (titulo.trim() === '' || ruta.trim() === '' || colorfondo.trim() === '' || colortexto.trim() === '') {
      setError('Debes llenar todos los campos');
    } else {
      setError('');
      await agregarNoticia(titulo, ruta);
      await actualizarEstilos(colorfondo, colortexto);
    }
  };

  return (
    <div className="container">
      <h2>Welcome</h2>
      <h1>💻 React Navbar Playground 💻</h1>

      <div className="row mt-5 justify-content-between">
        <div className="col-12 col-sm-4">
          <label className="mb-1">Agregar opción</label>
          <input
            className="form-control mb-1"
            id="titulo"
            name="titulo"
            placeholder="Titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            className="form-control mb-1"
            id="ruta"
            name="ruta"
            placeholder="Ruta"
            value={ruta}
            onChange={(e) => setRuta(e.target.value)}
          />
        
        </div>

        <div className="col-12 col-sm-4 ">
          <label>Estilos</label>
          <input
            className="form-control mb-1"
            id="colorfondo"
            name="colorfondo"
            placeholder="colorfondo"
            value={colorfondo}
            onChange={(e) => setColorfondo(e.target.value)}
          />
          <input
            className="form-control mb-1"
            id="colortexto"
            name="colortexto"
            placeholder="colortexto"
            value={colortexto}
            onChange={(e) => setColortexto(e.target.value)}
          />
        </div>
        {error &&  <div className="error-message">{error}</div>}
          <button className="btn btn-dark mt-2"
          onClick={handleAgregar}>agregar</button>
      </div>
    </div>
  );
};
