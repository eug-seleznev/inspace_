import { Container } from "inversify";
import { ServiceStore } from "./service/ServiceStore";
import { TestStore } from "./TestStore";
import { UIStore } from "./uiStore/uiStore";
import { UserStore } from "./user_/UserStore";


 export class RootStore {
    public testStore: any;
    public userStore: any;
    public serviceStore: any;
    public UIStore: any;
    public container: Container;

    public constructor() {
        this.testStore = new TestStore();
        this.userStore = new UserStore();
        this.container = new Container();
        this.UIStore = new UIStore();
        this.serviceStore = new ServiceStore();

        this.container.bind(TestStore).toConstantValue(this.testStore);
        this.container.bind(UserStore).toConstantValue(this.userStore);
        this.container.bind(ServiceStore).toConstantValue(this.serviceStore);
        this.container.bind(UIStore).toConstantValue(this.UIStore);


    }

}    

