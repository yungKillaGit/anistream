'use client';
import { createTheme, MantineThemeProvider, MantineThemeProviderProps, NavLink } from '@mantine/core';

const theme = createTheme({
  components: {
    NavLink: NavLink.extend({
      defaultProps: {
        styles: {
          label: { display: 'flex', alignItems: 'center' },
        },
      },
    }),
  },
});

export const ThemeProvider = (props: Omit<MantineThemeProviderProps, 'theme'>) => {
  return <MantineThemeProvider theme={theme} {...props} />;
};
