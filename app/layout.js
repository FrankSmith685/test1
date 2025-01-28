// import HeaderNav from "./components/assets/HeaderNav";
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
        {/* Título y descripción */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Sandra Roggero" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://roggero-beratung.de" />
        <meta
          property="og:image"
          content="https://roggero-beratung.de/logo.png" // Cambia esto por la URL de tu logo o imagen destacada.
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="consultoría, Alemania, migrantes, Sandra Roggero, asesoría legal, asesoría financiera"
        />

        {/* Favicon */}
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
