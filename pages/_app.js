import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Global, css } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import {
  ThemeProvider,
  CSSReset,
  useColorMode,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";

import theme from "../styles/theme";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import MDXComponents from "../components/MDXComponents";
import SEO from "../next-seo.config";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171923"};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  const config = {
    useSystemColorMode: true,
  };

  const extendedTheme = extendTheme({ config });

  return (
    <ThemeProvider theme={extendedTheme}>
      <ChakraProvider theme={extendedTheme}>
        <MDXProvider components={MDXComponents}>
          <GlobalStyle>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </MDXProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default App;
