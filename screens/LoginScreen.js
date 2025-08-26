// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Alert } from 'react-native';
import { COLORS } from '../constants/Colors';
import { buscarAdvogado, adicionarAdvogado } from '../database/database';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha e-mail e senha.');
      return;
    }
    try {
      const advogado = await buscarAdvogado(email, senha);
      if (advogado) {
        // Navega para a tela principal, passando os dados do usuário
        navigation.replace('MainApp', { screen: 'Dashboard', params: { user: advogado } });
      } else {
        Alert.alert('Erro de Login', 'E-mail ou senha incorretos.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
    }
  };

  const handleSignUp = async () => {
    // Para simplificar, usamos os mesmos campos. Um app real teria uma tela de cadastro.
    if (!email || !senha) {
        Alert.alert('Erro', 'Preencha e-mail e senha para se cadastrar.');
        return;
    }
    try {
      // Usamos o email como nome padrão no cadastro rápido
      await adicionarAdvogado(email.split('@')[0], email, senha);
      Alert.alert('Sucesso', 'Usuário registrado! Faça o login para continuar.');
    } catch (error) {
        if (error.message.includes('UNIQUE constraint failed')) {
            Alert.alert('Erro', 'Este e-mail já está cadastrado.');
        } else {
            Alert.alert('Erro', 'Não foi possível registrar o usuário.');
        }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.logo}>JURISAPP</Text>
        <Text style={styles.title}>LOGIN</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          placeholderTextColor={COLORS.textSecondary}
          keyboardType="email-address"
          autoCapitalize="none"
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
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Não tem uma conta? Cadastre-se</Text>
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
    alignItems: 'center', // Centraliza o conteúdo
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
    backgroundColor: 'white',
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
    textAlign: 'right',
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
  signUpButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    color: COLORS.primaryDark,
    fontSize: 14,
  },
});

export default LoginScreen;