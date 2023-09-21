

import { CountStore } from "./CountStore";

 class RootStore {
    countStore;

    constructor () {
        this.countStore = new CountStore(this)
    }
}

export default RootStore