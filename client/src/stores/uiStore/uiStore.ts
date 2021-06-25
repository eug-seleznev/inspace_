import { injectable } from "inversify";
import { action, makeAutoObservable, observable } from "mobx";
import {RootStore} from "../RootStore";






export enum ThemePicker {
  DARK = 'dark',
  LIGHT = 'light'
}




@injectable()
export class UIStore {
    @observable theme: ThemePicker

    public constructor(private readonly rootStore: RootStore){
        makeAutoObservable(this)
        this.theme = ThemePicker.DARK;
    }

    @action ChnageTheme(theme: ThemePicker){
        this.theme = theme;
    }
}
