import { observer } from "mobx-react";
import  { ThemeProvider } from 'styled-components'
import { useTheme } from "./color";




const ThemeContext = observer(({children}: any) => {
  const theme = useTheme();
  return (
      
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
})


export default ThemeContext