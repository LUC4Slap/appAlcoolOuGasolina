import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import api from '../services/api';

const Map = ({ location }) => {
  const [local, setLocal] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    setLocal(location);
    const getdata = async () => {
      try {
        const { data } = await api.get()
        // alert(JSON.stringify(data, null, 4))
        setData(data);
      } catch (error) {
        alert(error.message);
      }
    }
    getdata()
  }, [])

  console.log(location);

  return (
    <View style={styles.container}>
      <MapView
        region={{ ...local, latitudeDelta: 0.005, longitudeDelta: 0.005 }}
        showsUserLocation
        style={styles.mapStyle}
      >
        <Marker
          title="Minha Posição"
          pinColor="green"
          description="Você esta aqui"
          coordinate={local}>
        </Marker>
        {data.map((region, index) => (
            <Marker
              key={index}
              title={region.nomeFantasia}
              description={region.turnoAtendimento}
              coordinate={{ latitude: region.lat, longitude: region.long }}
            ></Marker>
          ))}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
