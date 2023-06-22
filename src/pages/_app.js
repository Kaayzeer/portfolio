import "@/styles/globals.css";
// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      myPrimary: "#D7CDDB",
    },
  },
});

// 3. Wrap NextUIProvider with NextThemesProvider
// _app.jsx // _app.tsx

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
