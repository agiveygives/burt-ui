import { DefaultTheme } from 'styled-components';

const colors = {
  caribbeanCurrent: '#156064',
  mint: '#00c49a',
  naplesYellow: '#f8e16c',
  melon:'#ffc2b4',
  coral:'#fb8f67',
}

const defaultTheme: DefaultTheme = {
  colors: {
    primary: colors.mint,
    secondary: colors.coral,
    ghost: colors.caribbeanCurrent,
    white: '#f4f4f4',
    header: colors.naplesYellow,
  },
};

export default defaultTheme;
