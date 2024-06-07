import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components";
import App from './App.tsx'

import {GlobalStyles} from "src/styles/global.ts";
import theme from "src/styles/theme";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
   </ThemeProvider>
  </React.StrictMode>,
)
