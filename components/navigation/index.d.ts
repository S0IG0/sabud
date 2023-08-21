import {FC} from "react";
import {BottomTabBarButtonProps, BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {ParamListBase} from "@react-navigation/native";

export interface Icon {
    default: string
    focused: string
}

export interface Page {
    name: string
    component: FC<BottomTabScreenProps<ParamListBase, string>>
    icon: Icon,
    label: string
}

interface Props extends BottomTabBarButtonProps {
    page: Page,
}