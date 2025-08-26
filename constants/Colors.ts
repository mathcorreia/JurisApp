// Arquivo: constants/Colors.ts

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

// Cores para os componentes de tela (Login, Dashboard, etc.)
// Adicionamos um "export" aqui para que os arquivos .js possam importá-lo pelo nome.
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
// Mantemos o "export default" para os arquivos que já o utilizam.
export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    icon: '#687076',
  },
  dark: {
    text: '#fff',
    background: '#151718',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    icon: '#9BA1A6',
  },
};