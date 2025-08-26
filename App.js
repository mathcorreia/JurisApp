// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { initDatabase } from './database/database'; // Importe a função

export default function App() {
  // Executa a inicialização do banco de dados uma vez quando o app abre
  useEffect(() => {
    initDatabase();
    console.log("Banco de dados inicializado.");
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}