import { Container } from "inversify";
import { TestStore } from "./TestStore";
import { TUserStore, userStore } from "./user/userStore";


 export class RootStore {
    public testStore: any;
    public UserStore: TUserStore;
    public container: Container;

    public constructor() {
        this.testStore = new TestStore();
        this.UserStore = userStore();
        this.container = new Container();

        this.container.bind(TestStore).toConstantValue(this.testStore);
        this.container.bind(userStore).toConstantValue(this.UserStore);
    }

}    

