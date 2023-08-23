import {Page} from "./index";

export enum Names {
    HOME = 'home',
    LOGIN = 'login',
    HISTORY = 'history',
    SALARY = 'salary',
}

import Home from "../pages/Home";
import Login from "../pages/Login";
import History from "../pages/History";
import Salary from "../pages/Salary";

export const pages = new Map<string, Page>()
    .set(Names.HOME, {
        name: Names.HOME,
        component: Home,
        icon: {default: 'home-outline', focused: 'home-outline'},
        label: 'Главная',
    })
    .set(Names.LOGIN, {
        name: Names.LOGIN,
        component: Login,
        icon: {default: 'log-in-outline', focused: 'log-in-outline'},
        label: 'Вход',
    })
    .set(Names.HISTORY, {
        name: Names.HISTORY,
        component: History,
        icon: {default: 'receipt-outline', focused: 'receipt-outline'},
        label: 'История',
    })
    .set(Names.SALARY, {
        name: Names.SALARY,
        component: Salary,
        icon: {default: 'wallet-outline', focused: 'wallet-outline'},
        label: 'Зарплата',
    })
