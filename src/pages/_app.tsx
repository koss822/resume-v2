import "utils/wdyr";

import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import type { FC } from "react";
import brandingTheme from "brandingTheme";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <CssVarsProvider theme={brandingTheme} disableTransitionOnChange>
      <CssBaseline />
      <Component {...pageProps} />
    </CssVarsProvider>
    <Analytics />
  </>
);

export default App;
