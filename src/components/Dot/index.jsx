import styles from './index.module.css';
import { useState } from 'react';
import paradas from '../../constants/constants';

function Dot({ handleClick, origen, destino, camino, id, nombre, angulo, top, left }) {
  
  const [clicked, setClicked] = useState(false);
  const posX = paradas[id].posX;
  const posY = paradas[id].posY;


  function chooseColor() {
    if(origen === id || destino === id) {
      return `${styles.dot} ${styles.clicked}`;
    } else if(camino.includes(id)) {
      return `${styles.dot} ${styles.path}`;
    } else {
      return `${styles.dot}`;
    }
  }

  return (
    <div 
        className={styles.container}
        style={{left:`${posX-10}px`, top:`${100+posY-10}px`}}
    >
      <div
        className={chooseColor()}
        onClick={()=> { handleClick(id, nombre); setClicked(!clicked)}}
      >
      </div>
      <p 
        className={styles.name}
        style={{
          transform:`rotate(${angulo}deg)`,
          top: `${top}px`,
          left: `${left}px`
        }}
      >{nombre}</p>
    </div>
  )
}

export default Dot