import { typographyVariants } from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#6C63FF',
      contrastText: 'white',
    },
  },
  secondary: {
    main: {
      color: '#4b45b2',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export default {
  typographyVariants,
  colors,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};