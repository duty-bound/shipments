import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { App } from './components/app'
import { theme } from './styles/theme'

const root = document.getElementById('root')

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, root)
