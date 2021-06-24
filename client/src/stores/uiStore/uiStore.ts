import { injectable } from "inversify";
import { action, makeAutoObservable, observable } from "mobx";






export enum ThemePicker {
  DARK = 'dark',
  LIGHT = 'light'
}




@injectable()
export class UIStore {
    @observable theme: ThemePicker

    public constructor(){
        makeAutoObservable(this)
        this.theme = ThemePicker.DARK;
    }

    @action ChnageTheme(theme: ThemePicker){
        this.theme = theme;
    }
}
