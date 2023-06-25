import "@/styles/globals.css";

import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      myPrimary: "#C8D5DB",
      mySecondary: "#D7CDDB",
      myTertiary: "#323136",
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
