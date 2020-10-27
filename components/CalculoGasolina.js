import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function CalculoGasolina() {
  const [valGasolina, setValGasolina] = useState('');
  const [valAlcool, setValAlcool] = useState('');
  const [vale, setVale] = useState()
  function calcular() {
    let custoBeneficio = (valAlcool / valGasolina).toFixed(1);
    custoBeneficio <= 0.7 ? setVale('Coloque álcool') : setVale('Coloque Gasolina')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Colocar Álcool ou Gasolina ?</Text>
      <TextInput
        style={styles.inputColor}
        placeholderTextColor={'#fff'} 
        keyboardType='numeric'
        placeholder="Preço da Gasolina"
        onChangeText={val => setValGasolina(val)}
        value={valGasolina}
      />
      <TextInput
        style={styles.inputColor}
        keyboardType='numeric'
        placeholderTextColor={'#fff'} 
        placeholder="Preço do álcool"
        onChangeText={val => setValAlcool(val)}
        value={valAlcool}
      />
      <TouchableOpacity onPress={calcular} style={styles.butao}>
        <Text style={styles.texto}>Calcular</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Text style={styles.resultado}>{vale}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#35393b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  butao: {
    width: '80%',
    marginTop: 15,
    padding: 13,
    backgroundColor: '#ccc',
    borderRadius: 5,
    borderColor: '#ccc'
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  resultado: {
    marginTop: 15,
    fontSize: 20,
  },
  inputColor: {
    color: '#fff',
    marginTop: 10,
    width: '80%',
    padding: 12,
    fontSize: 20,
    borderColor: '#fff',
    borderWidth: 1
  },
  titulo: {
    fontSize: 25,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }
});
