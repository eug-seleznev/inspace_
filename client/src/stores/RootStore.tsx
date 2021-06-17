import { Container } from "inversify";
import { Provider } from 'inversify-react';
import { TestStore } from "./TestStore";
import Render from "./user/test";
import { TUserStore, userStore } from "./user/userStore";
import { createBrowserHistory, History } from "history";


 export class RootStore {
    public testStore: any;
    public container: Container;

    public constructor() {
        this.testStore = new TestStore();
        this.container = new Container();

        this.container.bind(TestStore).toConstantValue(this.testStore)
    }

}    

