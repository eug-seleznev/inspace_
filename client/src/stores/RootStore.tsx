import { Container } from "inversify";
import { TestStore } from "./TestStore";
import { UserStore } from "./user_/UserStore";


 export class RootStore {
    public testStore: any;
    public userStore: any;
    public container: Container;

    public constructor() {
        this.testStore = new TestStore();
        this.userStore = new UserStore();
        this.container = new Container();

        this.container.bind(TestStore).toConstantValue(this.testStore);
        this.container.bind(UserStore).toConstantValue(this.userStore);

    }

}    

