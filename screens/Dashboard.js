// screens/Dashboard.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { COLORS } from '../constants/Colors';
import ProcessoCard from '../components/ProcessoCard';
import MeetingsCalendar from '../components/MeetingsCalendar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { buscarProcessosPorAdvogado } from '../database/database';

const DashboardScreen = ({ route, navigation }) => {
  const { user } = route.params; // Recebe o usuário que veio da tela de login
  const [processos, setProcessos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarProcessos = async () => {
      try {
        const processosDoUsuario = await buscarProcessosPorAdvogado(user.id);
        setProcessos(processosDoUsuario);
      } catch (error) {
        console.error('Erro ao buscar processos:', error);
      } finally {
        setLoading(false);
      }
    };
    
    carregarProcessos();
  }, [user.id]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, Dr(a). {user.nome}</Text>
          <TouchableOpacity>
             <MaterialCommunityIcons name="account-circle-outline" size={32} color={COLORS.textLight} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>MEUS PROCESSOS</Text>
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.textLight} />
          ) : processos.length > 0 ? (
            processos.map(proc => (
              <ProcessoCard key={proc.id} {...proc} />
            ))
          ) : (
            <Text style={styles.emptyText}>Nenhum processo cadastrado.</Text>
          )}
          <TouchableOpacity style={styles.seeMoreButton} onPress={() => navigation.navigate('AllCases')}>
            <Text style={styles.seeMoreText}>VER MAIS</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>MINHAS REUNIÕES</Text>
          <MeetingsCalendar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.primaryDark },
  container: { flex: 1, padding: 20 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  greeting: {
    color: COLORS.textLight,
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: COLORS.primaryMedium,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    color: COLORS.textLight,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    letterSpacing: 1,
  },
  seeMoreButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  seeMoreText: {
    color: COLORS.primaryDark,
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyText: {
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
  },
});

export default DashboardScreen;