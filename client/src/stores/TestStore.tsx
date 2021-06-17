import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
import "reflect-metadata";

@injectable()
export class TestStore {
    @observable testValue?: string
    
    public constructor(){
        makeObservable(this)
        this.testValue = 'yes'
    }

    @action getValue(){
        return 'hello'
    }

    @action ChangeValue(){
        this.testValue = 'eeeee'
    }

}