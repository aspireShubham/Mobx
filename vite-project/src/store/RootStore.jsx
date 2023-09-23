

import { CountStore } from "./CountStore";
import UserDetailsStore from './UserDetailsStore'

export class RootStore {
    countStore;
    userDetailsStore;

    constructor () {
        this.countStore = new CountStore(this)
        this.userDetailsStore = new UserDetailsStore(this)
    }
}

