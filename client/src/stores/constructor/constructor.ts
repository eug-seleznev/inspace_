import { injectable } from 'inversify'
import {action, makeAutoObservable, observable} from 'mobx'
import {RootStore} from "../RootStore";

interface IItem {
    name: string,
    about?: string
}



@injectable()
export class ConstructorStore {
    @observable name: string
    @observable pages: string[]
    @observable item: IItem

    public constructor(private readonly rootStore: RootStore) {
        makeAutoObservable(this)
        this.name = 'name'
        this.pages = ['1page']
        this.item = {name:'1 item'}
    }


    @action addPage(smth: string){
        this.pages.push(smth)
    }
    // @action setItem(smth: any){
    //     this.item = smth
    // }
    // @action changeName( ){
    //     this.name = smth
    // }
    // @action getPages(){
    //     return this.pages
    // }
}

// export default new Constructor