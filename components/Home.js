import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default function Home() {
  function mudarTeala() {
    Actions.calculo();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={mudarTeala}>
        <Text>Calcular Gasolina ou Álcool</Text>
      </TouchableOpacity>
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
    alignItems: 'center'
  }
})