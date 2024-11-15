// FooterNavbar.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FooterNavbar = () => {

  const handlePress = (buttonName: string) => {
    alert(`${buttonName} pressed`); // Alerta ao clicar nos botões
  };

  return (
    <View style={styles.container}>
      {/* Ícone Home */}
      <TouchableOpacity onPress={() => handlePress('Home')} style={styles.navButton}>
        <View style={styles.iconContainer}>
          <Ionicons name="home-outline" size={24} color="#0097B2" />
        </View>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      {/* Ícone Perfil */}
      <TouchableOpacity onPress={() => handlePress('Profile')} style={styles.navButton}>
        <Ionicons name="person-outline" size={24} color="white" />
        <Text style={styles.navText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#0097B2',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  iconContainer: {
    width: 130,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Para Android
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});

export default FooterNavbar;
