import {makeAutoObservable} from "mobx";

class Auth {
    isAuth: boolean = false;
    constructor() {
        makeAutoObservable(this);
    }
}

export default new Auth();