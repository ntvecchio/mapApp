import React, { useEffect, useRef, useState } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import FooterNavbar from './FooterNavbar'; // Importa o FooterNavbar

const INITIAL_REGION: Region = {
  latitude: -23.619293837922765,
  longitude: -45.401495893194806,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

export default function App() {
  const mapRef = useRef<MapView>(null);
  const [markers, setMarkers] = useState([]);
  const [newMarkerCoords, setNewMarkerCoords] = useState<null | { latitude: number, longitude: number }>(null);
  const [newMarkerName, setNewMarkerName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const focusMap = () => {
    const GreenBayStadium = {
      latitude: 44.5013,
      longitude: -88.0622,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };

    mapRef.current?.animateToRegion(GreenBayStadium, 2000);
  };

  const onMarkerSelected = (marker: any) => {
    Alert.alert(marker.name);
  };

  const calloutPressed = () => {
    console.log('Callout pressionado!');
  };

  const onRegionChange = (region: Region) => {
    console.log('Nova região:', region);
  };

  const handleMapPress = (e: any) => {
    const coordinate = e.nativeEvent.coordinate;
    setNewMarkerCoords(coordinate);
    setIsModalVisible(true);
  };

  const addNewMarker = () => {
    if (!newMarkerName.trim()) {
      Alert.alert('Nome inválido', 'Por favor, insira um nome válido para o local.');
      return;
    }

    if (!newMarkerCoords) {
      Alert.alert('Erro', 'Coordenadas não encontradas.');
      return;
    }

    const newMarker = {
      latitude: newMarkerCoords.latitude,
      longitude: newMarkerCoords.longitude,
      name: newMarkerName,
    };

    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    setIsModalVisible(false);
    setNewMarkerCoords(null);
    setNewMarkerName('');
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
        onRegionChangeComplete={onRegionChange}
        onPress={handleMapPress}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.name}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            onPress={() => onMarkerSelected(marker)}
          >
            <Callout onPress={calloutPressed}>
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18 }}>Detalhes do local</Text>
                <Text>{marker.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* Modal para adicionar um novo marcador */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Adicionar Nome ao Local</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do local"
              value={newMarkerName}
              onChangeText={setNewMarkerName}
            />
            <TouchableOpacity style={styles.button} onPress={addNewMarker}>
              <Text style={styles.buttonText}>Adicionar Marcador</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Adiciona o FooterNavbar aqui */}
      <FooterNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
