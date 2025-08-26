// navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AllCasesScreen from '../screens/AllCasesScreen';

const Stack = createNativeStackNavigator();

// Navegador principal do app após o login
const MainAppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="AllCases" component={AllCasesScreen} />
      {/* Adicione outras telas do app aqui, como Perfil, Detalhes do Processo, etc. */}
    </Stack.Navigator>
  );
};

// Navegador raiz que controla o fluxo de autenticação
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainApp" component={MainAppStack} />
    </Stack.Navigator>
  );
};

export default AppNavigator;