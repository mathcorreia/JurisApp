// No topo do seu arquivo App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator'; // Seu navegador
import { initDatabase } from './database/database'; // Importe a função

export default function App() {
  // Executa a inicialização do banco de dados uma vez
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}