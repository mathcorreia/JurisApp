// components/MeetingsCalendar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { COLORS } from '../../constants/colors';

// Configuração para o idioma português
LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar.','Abr.','Mai.','Jun.','Jul.','Ago.','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['DOM','SEG','TER','QUA','QUI','SEX','SÁB'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

const MeetingsCalendar = () => {
  return (
    <View style={styles.container}>
      <Calendar
        theme={{
          backgroundColor: COLORS.secondaryDark,
          calendarBackground: COLORS.secondaryDark,
          textSectionTitleColor: COLORS.textSecondary,
          selectedDayBackgroundColor: COLORS.accent,
          selectedDayTextColor: '#ffffff',
          todayTextColor: COLORS.accent,
          dayTextColor: COLORS.textLight,
          textDisabledColor: '#555',
          dotColor: COLORS.accent,
          selectedDotColor: '#ffffff',
          arrowColor: COLORS.textLight,
          monthTextColor: COLORS.textLight,
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '500',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden', // Garante que o calendário respeite o borderRadius
  },
});

export default MeetingsCalendar;