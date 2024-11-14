import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.content}>Bem-vindo à sua conta!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  content: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Profile;
