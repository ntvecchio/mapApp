import React from 'react';
import { withExpoRouter } from 'expo-router';

// O App vai apenas exportar o roteador
function App() {
  return null; // O Expo Router cuida da navegação automaticamente
}

// Use `withExpoRouter` para habilitar o roteamento
export default withExpoRouter(App);
