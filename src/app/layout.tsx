import '@mantine/core/styles.css';
import 'normalize.css/normalize.css';
import './globals.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AniStream',
  description: 'Anime streaming app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body className={inter.className}>
        <MantineProvider forceColorScheme="dark">
          <ThemeProvider>{children}</ThemeProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
