import Dot from '../Dot';
import Line from '../Line';
import PathLine from '../PathLine';
import Transbordo from '../Transbordo';
import styles from './index.module.css';
import { useState } from 'react';

function Mapa({origen, destino, camino, mandarOrigen, mandarDestino}) {
  function chooseStation(id, nombre) {
      if(origen === 0) {
        mandarOrigen(id, nombre);
      } else if(origen === id) {
        mandarOrigen(0, " ");
        mandarDestino(0, " ");
      } else if(destino === 0) {
        mandarDestino(id, nombre);
      } else if(destino === id) {
        mandarDestino(0, " ");
      } else {
        mandarDestino(id, nombre);
      }
  }

  return (
    <>
        
        {/* Linea celeste */}
        <Line color='celeste' aX={100} aY={350} bX={200} bY={350} />
        <Line color='celeste' aX={200} aY={350} bX={300} bY={350} />
        <Line color='celeste' aX={300} aY={350} bX={400} bY={350} />
        <Line color='celeste' aX={400} aY={350} bX={500} bY={350} />
        <Line color='celeste' aX={500} aY={350} bX={600} bY={350} />
        <Line color='celeste' aX={600} aY={350} bX={700} bY={350} />
        <Line color='celeste' aX={700} aY={350} bX={800} bY={350} />
        {/* Linea roja */}
        <Line color='rojo' aX={150} aY={200} bX={300} bY={200} />
        <Line color='rojo' aX={300} aY={200} bX={400} bY={200} />
        <Line color='rojo' aX={400} aY={200} bX={550} bY={200} />
        <Line color='rojo' aX={550} aY={200} bX={700} bY={200} />
        <Line color='rojo' aX={700} aY={200} bX={800} bY={200} />
        {/* Linea morada */}
        <Line color='morado' aX={200} aY={500} bX={300} bY={500} />
        <Line color='morado' aX={300} aY={500} bX={400} bY={500} />
        <Line color='morado' aX={400} aY={500} bX={500} bY={450} />
        <Line color='morado' aX={500} aY={450} bX={600} bY={412.5} />
        <Line color='morado' aX={600} aY={412.5} bX={700} bY={375} />
        {/* Linea azul */}
        <Line color='azul' aX={530} aY={550} bX={530} bY={500} />
        <Line color='azul' aX={530} aY={500} bX={530} bY={450} />
        <Line color='azul' aX={530} aY={450} bX={530} bY={400} />
        <Line color='azul' aX={530} aY={400} bX={530} bY={350} />
        <Line color='azul' aX={530} aY={350} bX={550} bY={260} />
        <Line color='azul' aX={550} aY={260} bX={635} bY={140} />
        <Line color='azul' aX={635} aY={140} bX={700} bY={50} />
        <Line color='azul' aX={800} aY={50} bX={700} bY={50} />
        {/* Linea verde */}
        <Line color='verde' aX={150} aY={50} bX={300} bY={50} />
        <Line color='verde' aX={300} aY={50} bX={425} bY={140} />
        <Line color='verde' aX={425} aY={140} bX={550} bY={230} />
        <Line color='verde' aX={550} aY={230} bX={700} bY={325} />

        {/* Camino */}
        {
          camino.map((id, i) => {
            if(i + 1 < camino.length) {
                return <PathLine pX={id} pY={camino[i + 1]} />
            }
          })
        }
        
        {/* Transbordos */}
        <Transbordo  aX={550} aY={230} bX={550} bY={200} />
        <Transbordo  aX={550} aY={230} bX={550} bY={260} />
        <Transbordo  aX={700} aY={325} bX={700} bY={350} />
        <Transbordo  aX={700} aY={375} bX={700} bY={350} />
        <Transbordo  aX={530} aY={350} bX={500} bY={350} />
        <Transbordo  aX={530} aY={450} bX={500} bY={450} />

        {/* Paradas linea roja */}
        <Dot handleClick={chooseStation} origen={origen} destino={destino}  camino={camino} id={10} nombre="Pasteur" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino}  camino={camino} id={11} nombre="Callao" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino}  camino={camino} id={12} nombre="Uruguay" angulo={-45} top={-35} left={-60} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino}  camino={camino} id={13} nombre="Carlos Pellegrini" angulo={-45} top={-105} left={-20}  />
        <Dot handleClick={chooseStation} origen={origen} destino={destino}  camino={camino} id={14} nombre="Florida" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino}  camino={camino} id={15} nombre="Leandro N. Alem" angulo={-45} top={-105} left={-20} />
        {/* Paradas linea celeste */}
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={20} nombre="Alberti" angulo={-45} top={-105} left={-20}/>
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={21} nombre="Pasco" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={22} nombre="Congreso" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={23} nombre="Sáenz Peña" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={24} nombre="Lima" angulo={-45} top={-50} left={-50} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={25} nombre="Piedras" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={26} nombre="Perú" angulo={-45} top={-95} left={-8} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={27} nombre="Plaza de Mayo" angulo={-45} top={-105} left={-20} />
        {/* Paradas linea verde */}
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={30} nombre="Facultad de Medicina" angulo={-45} top={-55} left={-80} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={31} nombre="Callao" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={32} nombre="Tribunales" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={33} nombre="9 de Julio" angulo={-45} top={-38} left={-78} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={34} nombre="Catedral" angulo={-45} top={-105} left={-20} />
        {/* Paradas linea azul */}
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={40} nombre="Retiro" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={41} nombre="General San Martín" angulo={-45} top={-55} left={-80} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={42} nombre="Lavalle" angulo={-45} top={-85} left={-5} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={43} nombre="Diagonal Norte" angulo={-45} top={-85} left={-5} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={44} nombre="Avenida de Mayo" angulo={-45} top={-100} left={-10} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={45} nombre="Moreno" angulo={-45} top={-85} left={-5} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={46} nombre="Independencia" angulo={-45} top={-15} left={-100} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={47} nombre="San Juan" angulo={-45} top={-85} left={-5} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={48} nombre="Constitución" angulo={-45} top={-85} left={-5} />
        {/* Paradas linea morada */}
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={50} nombre="Pichincha" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={51} nombre="Entre Ríos" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={52} nombre="San José" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={53} nombre="" angulo={-45} top={-105} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={54} nombre="Belgrano" angulo={-45} top={-65} left={-20} />
        <Dot handleClick={chooseStation} origen={origen} destino={destino} camino={camino} id={55} nombre="Bolívar" angulo={-45} top={-65} left={-20} />

        

    </>
  )
}

export default Mapa