import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Importe seus componentes customizados.
// Verifique se os caminhos estão corretos para a sua estrutura de pastas!
import ProcessoCard from '@/components/ProcessoCard';
import MeetingsCalendar from '@/components/MeetingsCalendar';

// --- DADOS DE EXEMPLO ---
// No futuro, estes dados virão de uma API ou banco de dados.
const mockProcessos = [
  {
    id: '1',
    cliente: 'JÚLIA',
    tipo: 'PROCESSO TRABALHISTA',
    numero: '123.456.789-0',
    status: 'EM PROCESSO',
  },
  {
    id: '2',
    cliente: 'VINICIUS',
    tipo: 'PROCESSO CRIMINAL',
    numero: '987.654.321-0',
    status: 'AGUARDANDO AUDIENCIA',
  },
];

// O nome da função não importa para o roteamento, mas é uma boa prática
export default function DashboardScreen() {
  const userName = 'Gustavo'; // Este nome também virá dos dados do usuário logado

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }} // Espaço extra para não ficar atrás da TabBar
      >
        {/* --- CABEÇALHO --- */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, Dr. {userName}</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="account-circle-outline" size={32} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* --- SEÇÃO MEUS PROCESSOS --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>MEUS PROCESSOS</Text>
          {mockProcessos.map((proc) => (
            <ProcessoCard key={proc.id} {...proc} />
          ))}
          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>VER MAIS</Text>
          </TouchableOpacity>
        </View>

        {/* --- SEÇÃO MEUS ATALHOS --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>MEUS ATALHOS</Text>
          <View style={styles.shortcutsContainer}>
            <TouchableOpacity style={styles.shortcutButton}>
              <MaterialCommunityIcons name="calendar" size={28} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutButton}>
              <MaterialCommunityIcons name="account-plus" size={28} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutButton}>
              <MaterialCommunityIcons name="gavel" size={28} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutButton}>
              <MaterialCommunityIcons name="file-document" size={28} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* --- SEÇÃO MINHAS REUNIÕES --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>MINHAS REUNIÕES</Text>
          <MeetingsCalendar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- ESTILOS ---
// Baseado no design do Figma
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#011638', // Azul bem escuro (fundo principal)
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 10,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#0d2149', // Azul um pouco mais claro para os cards de seção
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    letterSpacing: 1,
  },
  seeMoreButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  seeMoreText: {
    color: '#011638',
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
    backgroundColor: '#2a3a5b', // Azul acinzentado para os botões
    justifyContent: 'center',
    alignItems: 'center',
  },
});