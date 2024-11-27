import './App.css'
import Mapa from './components/Map'
import paradas from './constants/constants';
import trenecito from './assets/trenecito.gif'

import { useEffect, useState } from "react"

function App() {
  /*variables */
  const [origen, setOrigen] = useState(0);
  const [destino, setDestino] = useState(0);
  const [camino, setCamino] = useState([]);
  const [nombreOrigen, setNombreOrigen] = useState(" ");
  const [nombreDestino, setNombreDestino] = useState(" ");
  const [prioridad, setPrioridad] = useState(false); //true if trasbordo, false if tiempo

  const [trasCalculo, setTrasCalculo] = useState(false);
  const [esperando, setEsperando] = useState(false);
  const [error, setError] = useState(false);

  /*   const fetch8 = async () => {
      const response = await axios.get("http://localhost:8080/api/users");
      console.log(response.data.users)
    } */
  

  const aviso = async () => {
    try {
      const respuesta = await fetch('https://iaproybck.onrender.com/api/lechuga', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: "131",
          });
    } catch(error) {
      console.error('Error al enviar datos:', error);
    }
  }

  useEffect(() => {
    aviso();
  }, []
  );

  
  const enviarDatos = async () => {
    const datos = '' + origen + ' ' + destino + ' ' + prioridad;
  
    try {
      setEsperando(true);
      const respuesta =// await fetch('http://localhost:8080/api/lechuga', { 
                        await fetch('https://iaproybck.onrender.com/api/lechuga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos), // Convierte los datos a JSON
      });
      const resultado = await respuesta.json();
      setEsperando(false);
      setTrasCalculo(true);
      setCamino(resultado.ruta);
      console.log('Respuesta del servidor:', resultado);
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };
  

  function mandarOrigen(id, nombre){
    if(trasCalculo) return;
    setOrigen(id);
    setNombreOrigen(nombre);
  }


  function mandarDestino(id, nombre){
    if(trasCalculo) return;
    setDestino(id);
    setNombreDestino(nombre);
  }

  function handleClick(){
    if(origen == 0 || destino == 0) {
      setError(true);
    } else {
      enviarDatos();
      //setTrasCalculo(true);
      //setCamino([32, 33, 43, 44, 24, 23]);
    }
  }

  function handleChange(event) {
    if(event.target.value === 'tiempo') {
      setPrioridad(false);
    }
    else if(event.target.value === 'trasbordo') {
      setPrioridad(true);
    }
  }

  function restart() {
    setOrigen(0);
    setNombreOrigen("");
    setDestino(0);
    setNombreDestino("");
    setCamino([]);
    setTrasCalculo(false);
    setError(false);
  }

  return (
    <div className='main'>
      <div className='header'>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Hubot+Sans:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"></link>
        <h1 className='text hubot-sans-text'>Calculadora de rutas: Subte Buenos Aires</h1>
      </div>
      <div className='body-div'>
        <div className='map-div'>
          <Mapa origen={origen} destino={destino} camino={camino} mandarOrigen={mandarOrigen} mandarDestino={mandarDestino}/>
        </div>
        <div className='options-div'>
        {esperando?
              <div className='caja-div'>
                <img src={trenecito} />
                <p id='calculando' className='hubot-sans-text'>Calculando...</p>
              </div>
        : trasCalculo?
              <div className='caja-div'>
                <p className='hubot-sans-text'>
                  La mejor ruta desde {paradas[origen].nombre} hasta {paradas[destino].nombre} es:
                  <br /><br />
                  {camino.map((id, i) => {
                    if(i < (camino.length - 1)) {
                      return paradas[id].nombre + " > "
                    } else {
                      return paradas[id].nombre
                    }
                  })}

                </p>


                <button onClick={restart} className='hubot-sans-text submit-button'>Calcular otra ruta</button>
              </div>
        :
            (
              <div className='caja-div'> 
                  <p className='hubot-sans-text'>Seleccione en el mapa el origen y destino.</p>
                  <p className='hubot-sans-text'> Origen: </p>
                  <p className='hubot-sans-text destiny'>{nombreOrigen}</p>
                  <p className='hubot-sans-text'> Destino:</p>
                  <p className='hubot-sans-text destiny'>{nombreDestino}</p>
                  <p className='hubot-sans-text'> Priorizar por:</p>
                  <div>
                      <input checked={!prioridad} onChange={handleChange} type="radio" id="tiempo" name="fav_language" value="tiempo" />
                      <label for="tiempo" className='hubot-sans-text'>Menor tiempo de ruta</label>
                  </div>
                  <div>
                      <input checked={prioridad} onChange={handleChange} type="radio" id="trasbordo" name="fav_language" value="trasbordo" />
                      <label for="trasbordo" className='hubot-sans-text'>Menor número de trasbordos</label>
                  </div>
                  {
                    (error)?
                      <p className='hubot-sans-text error'>! Por favor seleccione ORIGEN y DESTINO</p>
                    :
                      null
                  }
                  <button onClick={handleClick} className='hubot-sans-text submit-button'>Calcular Ruta</button>
              </div>
            )}
            
        </div>
      </div>
    </div>
  )
}

export default App
