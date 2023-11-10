import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { AuthProvider } from './hooks/auth'
import { SearchProvider } from './hooks/search'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <SearchProvider>
         <Routes />
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
