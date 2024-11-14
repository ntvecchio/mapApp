import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FooterNavbar from '../components/FooterNavbar';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sport's Map</Text>

      {/* Botão "Selecione um Esporte" */}
      <TouchableOpacity style={styles.button}>
      <Ionicons name="arrow-forward" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Selecione um Esporte</Text>
      </TouchableOpacity>

      <FooterNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60, // Espaço para a navbar
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20, // Espaço entre o texto e o botão
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0097B2',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8, // Espaço entre o texto e o ícone
  },
  icon: {
    fontSize: 20,
  },
});

export default Home;
