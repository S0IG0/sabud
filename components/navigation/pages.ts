import {BottomPage, Page} from "./index";

export enum Names {
    HOME = 'home',
    LOGIN = 'login',
    SALARY = 'salary',
    HISTORY = 'history',
    HISTORY_LIST = 'history-list',
    HISTORY_DETAIL = 'history-detail',
}

import Home from "../pages/Home";
import Login from "../pages/Login";
import Salary from "../pages/Salary";
import History from "../pages/history/History";
import HistoryList from "../pages/history/HistoryList";
import HistoryDetail from "../pages/history/HistoryDetail";

export const tabPages = new Map<string, BottomPage>()
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


export const historyStackPages = new Map<string, Page>()
    .set(Names.HISTORY_LIST, {
        name: Names.HISTORY_LIST,
        component: HistoryList,
        label: 'Вся история',
    })
    .set(Names.HISTORY_DETAIL, {
        name: Names.HISTORY_DETAIL,
        component: HistoryDetail,
        label: 'История',
    })