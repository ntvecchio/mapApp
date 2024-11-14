import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const FooterNavbar = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Ícone Home */}
      <TouchableOpacity onPress={() => router.push('/home')} style={styles.navButton}>
        <View style={styles.iconContainer}>
          <Ionicons name="home-outline" size={24} color="#0097B2" />
        </View>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      {/* Ícone Perfil redirecionando para a página Profile */}
      <TouchableOpacity onPress={() => router.push('/profile')} style={styles.navButton}>
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
    // Substituindo o estilo de sombra para o boxShadow
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.3)', // Para web
    // Para iOS e Android, você pode deixar as sombras como estavam
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
