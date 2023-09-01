import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './utils/MuiTheme.jsx'
import { IconContext } from 'react-icons'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <IconContext.Provider value={{ className:"react-icons" }}>
    <App />
    </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
