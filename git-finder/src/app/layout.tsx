import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";





export const metadata: Metadata = {
  title: "GitHub Finder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
