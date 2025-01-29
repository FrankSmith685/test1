import Footer from "./assets/Footer";
import HeaderNav from "./assets/HeaderNav";
import { AppProvider } from "./context/AppProvider";
import "./globals.css";

export const metadata = {
  title: "Sandra Roggero M. Beratung"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AppProvider>
          <HeaderNav />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}