// screens/DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';
import ProcessoCard from '../components/ProcessoCard';
import MeetingsCalendar from '../components/MeetingsCalendar';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// Dados de exemplo (serão substituídos por dados da API)
const mockProcessos = [
  { id: '1', cliente: 'JÚLIA', tipo: 'PROCESSO TRABALHISTA', numero: 'XXX.XXX.XXX-X', status: 'EM PROCESSO' },
  { id: '2', cliente: 'VINICIUS', tipo: 'PROCESSO CRIMINAL', numero: 'YYY.YYY.YYY-Y', status: 'AGUARDANDO AUDIENCIA' },
];

const DashboardScreen = ({ navigation }) => {
  const userName = "Gustavo"; // Viria do estado de autenticação

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, Dr. {userName}</Text>
          <TouchableOpacity>
             <MaterialCommunityIcons name="account-circle-outline" size={32} color={COLORS.textLight} />
          </TouchableOpacity>
        </View>

        {/* Seção Meus Processos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>MEUS PROCESSOS</Text>
          {mockProcessos.map(proc => (
            <ProcessoCard key={proc.id} {...proc} />
          ))}
          <TouchableOpacity style={styles.seeMoreButton} onPress={() => navigation.navigate('AllCases')}>
            <Text style={styles.seeMoreText}>VER MAIS</Text>
          </TouchableOpacity>
        </View>

        {/* Seção Meus Atalhos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>MEUS ATALHOS</Text>
          <View style={styles.shortcutsContainer}>
            <TouchableOpacity style={styles.shortcutButton}><MaterialCommunityIcons name="calendar" size={28} color={COLORS.textLight} /></TouchableOpacity>
            <TouchableOpacity style={styles.shortcutButton}><MaterialCommunityIcons name="account-plus" size={28} color={COLORS.textLight} /></TouchableOpacity>
            <TouchableOpacity style={styles.shortcutButton}><MaterialCommunityIcons name="gavel" size={28} color={COLORS.textLight} /></TouchableOpacity>
            <TouchableOpacity style={styles.shortcutButton}><MaterialCommunityIcons name="file-document" size={28} color={COLORS.textLight} /></TouchableOpacity>
          </View>
        </View>

        {/* Seção Minhas Reuniões */}
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
  shortcutsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shortcutButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.secondaryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;