import React, { FC, ReactNode } from 'react';
import useTheme from 'hooks/useTheme';
import defaultTheme from '../../themes';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: typeof defaultTheme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme = defaultTheme }) => {
  useTheme({
    ...defaultTheme,
    ...theme,
  });

  return <>{children}</>;
}

export default ThemeProvider;
