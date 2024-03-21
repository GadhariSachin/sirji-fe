import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ReactQueryClientProvider from "./providers/ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sirji",
  description: "Sirji",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
