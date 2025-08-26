// Arquivo: constants/Colors.ts

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

// Cores para os componentes de tela (Login, Dashboard, etc.)
export const COLORS = {
  primaryDark: '#011638',
  primaryMedium: '#0d2149',
  secondaryDark: '#2a3a5b',
  textLight: '#FFFFFF',
  textSecondary: '#a9b3c9',
  accent: '#4A90E2',
  backgroundLight: '#F0F4F8',
};

// Cores para o tema geral do app (usado pelos componentes .tsx)
export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076', // Propriedade que estava faltando
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6', // Propriedade que estava faltando
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};