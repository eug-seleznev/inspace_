import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
import "reflect-metadata";
import { RootStore } from "./RootStore";

@injectable()
export class TestStore {
    @observable testValue?: string
    
    public constructor(private readonly rootStore: RootStore){
        makeObservable(this)
        this.testValue = 'yes'
    }

    @action getValue(){
        return 'hello'
    }

    @action ChangeValue(){
        this.testValue = 'eeeee'
        this.rootStore.serviceStore
    }

}