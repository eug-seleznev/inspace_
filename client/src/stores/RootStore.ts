import { Container } from "inversify";
import { ServiceStore } from "./service/ServiceStore";
import { TestStore } from "./TestStore";
import { UIStore } from "./uiStore/uiStore";
import { UserStore } from "./user_/UserStore";
import { ConstructorStore } from "./constructor/constructor";
import { wrapHistory } from "oaf-react-router";
import {createBrowserHistory, History} from "history";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import {ModalStore} from "./ModalStore";

// @ts-ignore
export class HistoryStore implements History {}

export class RootStore {
    public routerStore: RouterStore;
    public historyStore: HistoryStore;
    public testStore: TestStore;
    public userStore: UserStore;
    public serviceStore: ServiceStore;
    public constructorStore: ConstructorStore;
    public UIStore: UIStore;
    public modalStore: ModalStore;
    public container: Container;

    public constructor() {
        const browserHistory = createBrowserHistory();
        wrapHistory(browserHistory, {
            smoothScroll: true,
            primaryFocusTarget: 'body',
        });
        this.routerStore = new RouterStore();
        this.historyStore = syncHistoryWithStore(browserHistory, this.routerStore);
        this.testStore = new TestStore(this);
        this.userStore = new UserStore(this);
        this.UIStore = new UIStore(this);
        this.serviceStore = new ServiceStore(this);
        this.constructorStore = new ConstructorStore(this);
        this.modalStore = new ModalStore(this);

        this.container = new Container();
        this.container.bind(RouterStore).toConstantValue(this.routerStore);
        this.container.bind(HistoryStore).toConstantValue(this.historyStore);
        this.container.bind(TestStore).toConstantValue(this.testStore);
        this.container.bind(UserStore).toConstantValue(this.userStore);
        this.container.bind(ServiceStore).toConstantValue(this.serviceStore);
        this.container.bind(ConstructorStore).toConstantValue(this.constructorStore);
        this.container.bind(UIStore).toConstantValue(this.UIStore);
        this.container.bind(ModalStore).toConstantValue(this.modalStore);
    }
}    

