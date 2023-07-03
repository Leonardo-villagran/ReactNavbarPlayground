import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Default from "./views/Default";

import  Context  from "./Context/Context";
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function App() {

  const [active, setActive] = useState([]);
  const [menu, setMenu] = useState([]);
  const [estilos, setEstilos] = useState([{}]);
  
  const globalState = {menu, setMenu, active, setActive, estilos, setEstilos};

  useEffect(() => {
    fetchMenu();
    fetchEstilos();
  }, []);

  const fetchMenu = () => {
    axios.get('http://localhost:3000/noticias')
      .then(response => {
        setMenu(response.data);

      })
      .catch(error => {
        console.error('Error al obtener noticias:', error);
      });
  };

  const fetchEstilos = () => {
    axios.get('http://localhost:3000/estilo')
      .then(response => {
        setEstilos(response.data[0]);
      })
      .catch(error => {
        console.error('Error al obtener noticias:', error);
      });
  };
  console.log("Menú:",menu);
  console.log("Estilos", estilos);

  return (
  <Context.Provider value={ globalState }>
    <BrowserRouter>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        {
          menu.map ((interno) => (
            <Route key={interno.id} path={`/${interno.ruta}`} element={<Default />} />
          ))}
      </Routes>
    </BrowserRouter>
  </Context.Provider>
  );
}
