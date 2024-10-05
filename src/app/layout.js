import localFont from "next/font/local";
import "./globals.css";
import '@mantine/core/styles.css';
import { NavbarMinimal } from "@/components/NavbarMinimal";
import styles from "./page.module.css";


import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Vocal Remover and Isolation [AI]",
  description: "Vocal Remover and Isolation [AI]",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider>
          <div className={styles["main-box"]}>
            <NavbarMinimal />
            {children}
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
