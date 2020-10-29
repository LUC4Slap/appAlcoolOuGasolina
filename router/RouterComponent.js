import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import CalculoGasolina from '../components/CalculoGasolina';
import Home from '../components/Home'
import ConsultarCnpj from '../components/ConsultarCnpj'
import Map from '../components/Map';


export default function RouterComponent() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" title="Home" component={Home} initial />
        <Scene key="calculo" title="Calculo Gasolina" component={CalculoGasolina} />
        <Scene key="cnpj" title="Consultar CNPJ" component={ConsultarCnpj} />
        <Scene key="map" title="Mapa" component={Map} />
      </Scene>
    </Router>
  )
}