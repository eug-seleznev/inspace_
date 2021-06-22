import { useInjection } from "inversify-react"
import { DefaultTheme } from "styled-components"
import { ThemePicker, UIStore } from "../../stores/uiStore/uiStore"


interface ColorsTypes {
    text: string;
    main: string;
    card: string;
    onSuccess: string;
    onError: string;
    graphic: string;
    inputs: string;
}




declare module "styled-components" {
  export interface DefaultTheme {
      colors: ColorsTypes
  }
}


export const themeDark: DefaultTheme = {
    colors: {
        text: '#FFFFFF',
        main: '#1B2025',
        card: '#0D0D0E ',
        onSuccess: '#147C1F',
        onError: '#A42525',
        graphic: '#0D74D5',
        inputs: '#3B3B3B'
    }
   
}
 
export const themeLight: DefaultTheme = {
    colors: {
        text: '#FFFFFF',
        main: '#1B2025',
        card: '#0D0D0E ',
        onSuccess: '#147C1F',
        onError: '#A42525',
        graphic: '#0D74D5',
        inputs: '#3B3B3B'
    }
   
}
 



export {}