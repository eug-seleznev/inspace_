import {makeAutoObservable} from 'mobx'

// interface StringArray {
//     [index: number]: string,
// }

interface SiteObject {
    name?: string,
    pages?: string[],
}

export class Constructor implements SiteObject {
    name:string
    pages: string[]

    constructor(props:any) {
        makeAutoObservable(this)
        this.name = props.name
        this.pages = props.pages
    }


    addPage(smth: string){
        this.pages.push(smth)
    }
}

// export default new Constructor