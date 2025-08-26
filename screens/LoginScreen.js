// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { COLORS } from '../constants/colors';
// Importe o Svg se você tiver um arquivo wave-background.svg
// import Svg, { Path } from 'react-native-svg';

const LoginScreen = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // A lógica de autenticação real viria aqui
    // Por enquanto, apenas navegamos para o Dashboard
    navigation.replace('MainApp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Para a onda, a melhor abordagem é usar um SVG.
        Coloque o componente SVG aqui com position: 'absolute'
        Exemplo: <WaveBackground style={styles.wave} />
      */}
      <View style={styles.header}>
        <Text style={styles.logo}>JURISAPP</Text>
        <Text style={styles.title}>LOGIN</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>USUÁRIO</Text>
        <TextInput
          style={styles.input}
          value={usuario}
          onChangeText={setUsuario}
          placeholder="Digite seu usuário"
          placeholderTextColor={COLORS.textSecondary}
        />
        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholder="Digite sua senha"
          placeholderTextColor={COLORS.textSecondary}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>ESQUECEU A SENHA?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  logo: {
    color: COLORS.textLight,
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10,
  },
  title: {
    color: COLORS.textLight,
    fontSize: 24,
    letterSpacing: 5,
  },
  form: {
    flex: 2,
    backgroundColor: COLORS.backgroundLight,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 50,
  },
  label: {
    color: COLORS.primaryDark,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  forgotPassword: {
    color: COLORS.primaryDark,
    fontSize: 14,
    marginBottom: 30,
  },
  button: {
    backgroundColor: COLORS.primaryMedium,
    borderRadius: 10,
    padding: 18,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.textLight,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;