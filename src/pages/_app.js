import "@/styles/globals.css";

import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      myPrimary: "#bcc9dc",
      mySecondary: "#2B441F",
      myTertiary: "#0e131b",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
