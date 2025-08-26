
const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight, // Propriedade 'tint' para o tema claro
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark, // Propriedade 'tint' para o tema escuro
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};