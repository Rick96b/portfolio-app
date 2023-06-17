import {makeAutoObservable} from 'mobx';

import { User } from 'Types';

class UserStore {
    currentUser: User = null;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentUser = (user: User) => {
        console.log(user)
        this.currentUser = user;
    }
}

const userStore = new UserStore();

export default userStore;