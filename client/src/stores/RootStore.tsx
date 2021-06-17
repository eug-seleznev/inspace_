import { Container } from "inversify";
import { TestStore } from "./TestStore";


 export class RootStore {
    public testStore: any;
    public container: Container;

    public constructor() {
        this.testStore = new TestStore();
        this.container = new Container();

        this.container.bind(TestStore).toConstantValue(this.testStore);
    }

}    

