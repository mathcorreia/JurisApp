// screens/AllCasesScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { COLORS } from '../constants/colors';

const AllCasesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todos os Processos</Text>
      <Text style={styles.subtitle}>Esta tela exibirá a lista completa de processos.</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primaryDark,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.secondaryDark,
    marginTop: 10,
    marginBottom: 20,
  }
});

export default AllCasesScreen;