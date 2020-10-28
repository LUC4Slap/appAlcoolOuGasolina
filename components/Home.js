import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default function Home() {
  function calculoGasolina() {
    Actions.calculo();
  }

  function buscarCnpj() {
    Actions.cnpj();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={calculoGasolina}>
        <Text style={styles.texto}>Calcular Gasolina ou Álcool</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={buscarCnpj}>
        <Text style={styles.texto}>Consultar CNPJ</Text>
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