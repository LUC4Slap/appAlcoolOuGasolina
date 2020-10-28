import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, FlatList } from 'react-native'
import Global from '../global/global';
import axios from 'axios'

export default function ConsultarCnpj() {
  const [cnpj, setCnpj] = useState('');
  const [resp, setResp] = useState([])

  async function resposta() {
    let arr = []
    let { data } = await axios.get(`${Global.urlConsultaCnpj}${cnpj}`);
    arr.push(data)
    setResp(arr);
  }

  const Item = ({ lista }) => {
    return (
    <View style={styles.item}>
      <Text style={styles.info}>TIPO: {lista.tipo}</Text>
      <Text style={styles.info}>Nome: {lista.nome}</Text>
      <Text style={styles.info}>Telefone: {lista.telefone}</Text>
      <Text style={styles.info}>E-mail: {lista.email}</Text>
      <Text style={styles.info}>Capital: R${lista.capital_social}</Text>
      <Text style={styles.info}>Endereço: </Text>
      <Text style={styles.info}>Logradouro: {lista.logradouro}</Text>
      <Text style={styles.info}>Bairro: {lista.bairro}</Text>
      <Text style={styles.info}>Numero: {lista.numero}</Text>
      <Text style={styles.info}>Cep: {lista.cep}</Text>
      <Text style={styles.info}>Municipio: {lista.municipio}</Text>
    </View>
  )};

    
  const renderItem = ({ item }) => {
  return(
    <Item lista={item} />
  )};
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputColor}
        keyboardType='numeric'
        placeholderTextColor={'#fff'}
        placeholder="Digite o CNPJ"
        onChangeText={val => setCnpj(val)}
        value={cnpj}
      />
      <TouchableOpacity onPress={resposta} style={styles.botao}>
        <Text style={styles.texto}>Buscar</Text>
      </TouchableOpacity>
      {/* {resp} */}
      <FlatList
        data={resp}
        renderItem={renderItem}
        keyExtractor={item => item.tipo}
      />
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
  inputColor: {
    color: '#fff',
    marginTop: 10,
    width: '80%',
    padding: 12,
    fontSize: 20,
    borderColor: '#fff',
    borderWidth: 1
  },
  botao: {
    width: '80%',
    marginTop: 15,
    padding: 13,
    backgroundColor: '#ccc',
    borderRadius: 5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  item: {
    // width: '80%',
    backgroundColor: '#ccc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  info: {
    fontSize: 12,
  },
})