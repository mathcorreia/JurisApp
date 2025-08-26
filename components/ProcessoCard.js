// components/ProcessoCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from './../constants/Colors.ts';

const ProcessoCard = ({ cliente, tipo, numero, status }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{cliente} - {tipo}</Text>
      <Text style={styles.number}>N° {numero}</Text>
      <Text style={styles.status}>{status}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.secondaryDark,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  title: {
    color: COLORS.textLight,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  number: {
    color: COLORS.textSecondary,
    fontSize: 14,
    marginBottom: 10,
  },
  status: {
    color: COLORS.textLight,
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    overflow: 'hidden', // Required for borderRadius on iOS
  },
});

export default ProcessoCard;