import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import CalculoGasolina from '../components/CalculoGasolina';
import Home from '../components/Home'


export default function RouterComponent() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" title="Home" component={Home} initial />
        <Scene key="calculo" title="Calculo Gasolina" component={CalculoGasolina} />
      </Scene>
    </Router>
  )
}