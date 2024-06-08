import { MantineProvider, MantineThemeProvider } from '@mantine/core';
import { ReactNode } from 'react';

export const TestWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider>
      <MantineThemeProvider>{children}</MantineThemeProvider>
    </MantineProvider>
  );
};
