import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as Location from 'expo-location';

export default function Home() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);


  function calculoGasolina() {
    Actions.calculo();
  }

  function buscarCnpj() {
    Actions.cnpj();
  }

  function buscarMapa() {
    Actions.map({ location });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={calculoGasolina}>
        <Text style={styles.texto}>Calcular Gasolina ou Álcool</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={buscarCnpj}>
        <Text style={styles.texto}>Consultar CNPJ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={buscarMapa}>
        <Text style={styles.texto}>Mapa</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#35393b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: '80%',
    padding: 13,
    backgroundColor: '#ccc',
    borderRadius: 5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4
  },
  texto: {
    fontSize: 15
  }
})