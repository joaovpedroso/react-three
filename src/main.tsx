import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components";
import App from './App.tsx'

import {GlobalStyles} from "src/styles/global.ts";
import theme from "src/styles/theme";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
   </ThemeProvider>
  </React.StrictMode>,
)
