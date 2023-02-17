import { Routes, Route,Link } from 'react-router-dom';
import './App.css';
import Mapa from './components/mapa';
import Example from './components/carrusel';
import Alumnos from './components/alumno';
import Explicacion from './components/explicacion_metod';
import Button from 'react-bootstrap/Button';

function App() {
  return (
   
    <div className="App">
      <Link to='/'><Button variant="danger">Inicio</Button>{' '}</Link>
       <Link to='Mapa'><Button variant="danger">Mapa</Button>{' '}</Link>
        <Link to='Galeria'><Button variant="danger">Galeria</Button>{' '}</Link>
        <Link to='Alumno'><Button variant="danger">Alumno</Button>{' '}</Link>
        
      <Routes>
        <Route path='/' element={<Explicacion></Explicacion>}></Route>
            <Route  path="/Mapa" element={<Mapa></Mapa>}/>
            <Route path='/Galeria' element={<Example></Example>} />
            <Route path='/Alumno' element={<Alumnos></Alumnos>} />
        </Routes> 

    </div> 
  );
}

export default App;
