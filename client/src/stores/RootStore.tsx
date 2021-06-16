import { Container } from "inversify";
import { Provider } from 'inversify-react';
import Render from "./user/test";
import { TUserStore, userStore } from "./user/userStore";






const myContainer = new Container();

myContainer.bind<TUserStore>(userStore).to({} as any);



export { myContainer };






export const TestStore = () => {
    return (
        <Provider container={myContainer}>
            <div>
               <Render />
            </div>
        </Provider>
    )
}

// class RootStore {
//   container: ChildStoreOne
//   userStore: userStore

//   constructor() {
//     this.container = new Container()
//   }
// }

// class ChildStoreOne {
//   root: RootStore
//   constructor(root: RootStore) {
//     this.root = root
//   }
//   methodOne() {}
// }

// class ChildStoreTwo {
//   root: RootStore
//   constructor(root: RootStore) {
//     this.root = root
//   }

//   getSomethingFromStoreOne() {
//     this.root.childStoreOne.methodOne()
//   }
// }