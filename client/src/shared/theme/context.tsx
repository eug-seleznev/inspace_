import React from 'react';
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import  { ThemeProvider } from 'styled-components'
import { ThemePicker, UIStore } from "../../stores/uiStore/uiStore";
import { themeDark, themeLight } from "./theme";

const ThemeContext = observer(({children}: any) => {
  const theme = useTheme();
  return (
      
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
})


export default ThemeContext




export const useTheme = () => {
    const uiStore = useInjection(UIStore);
    return uiStore.theme === ThemePicker.DARK ? themeDark : themeLight

}

