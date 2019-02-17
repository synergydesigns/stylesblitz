import { ThemeProvider } from 'styled-components'

// import { theme } from './Styles'


export const theme = {
  fontSize: '14px',
  color: '#073C87',
  primaryFont: '"Source Sans Pro", sans-serif',
  secondaryFont: 'Lato, sans-serif'
}

export default Provider = ({ children  }) => {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}