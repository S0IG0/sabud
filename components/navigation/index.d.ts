import {FC} from "react";
import {BottomTabBarButtonProps, BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {ParamListBase} from "@react-navigation/native";

export interface StackNavigationProps {
    pages: Page[] | BottomPage[]
}

export interface Icon {
    default: string
    focused: string
}

export interface Page {
    name: string
    component: FC<BottomTabScreenProps<ParamListBase, string>>
    label: string
}

export interface BottomPage extends Page{
    icon: Icon,
}

interface Props extends BottomTabBarButtonProps {
    page: BottomPage,
}