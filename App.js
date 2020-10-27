import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import CalculoGasolina from './components/CalculoGasolina';

export default function App() {
 
  return (
    <Router>
      <Scene key="root">
        <Scene key="calculo" title="Calculo Gasolina" component={CalculoGasolina} />
      </Scene>
    </Router>
  );
}