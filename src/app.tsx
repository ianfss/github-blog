import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { GitHubProvider } from './contexts/github-context'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GitHubProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GitHubProvider>
    </ThemeProvider>
  )
}
