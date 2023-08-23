import {action, makeAutoObservable, observable} from "mobx";

class Auth {
    isAuth: boolean = false;
    constructor() {
        makeAutoObservable(this, {
            isAuth: observable,
            setIsAuth: action
        });
    }

    setIsAuth(value: boolean) {
        this.isAuth = value;
    }
}

export default new Auth();