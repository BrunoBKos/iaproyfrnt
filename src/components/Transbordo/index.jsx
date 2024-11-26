import styles from './index.module.css';

function Transbordo({ aX, aY, bX, bY }) {
  
    const longitud = Math.sqrt(Math.pow(aX-bX, 2) + Math.pow(aY-bY, 2));
    const angulo = Math.atan2((aY - bY), (aX - bX)) * (180 / Math.PI);
    const cx = ((aX + bX) / 2) - (longitud / 2) - 2;
    const cy = (((100+aY) + (100+bY)) / 2) - 4;


  return (
    <div 
        className={styles.line}
        style={{
            'width': `${longitud}px`,
            'left': `${cx}px`, 
            'top': `${cy}px`,
            '-moz-transform': `rotate(${angulo}deg)`,
            '-webkit-transform': `rotate(${angulo}deg)`,
            '-o-transform': `rotate(${angulo}deg)`,
            '-ms-transform': `rotate(${angulo}deg)`,
            'transform': `rotate(${angulo}deg)`
        }}
    ></div>
  )
}

export default Transbordo