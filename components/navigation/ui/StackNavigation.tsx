import CustomStackHeader from "./CustomStackHeader";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FC} from "react";
import {StackNavigationProps} from "../index";

const StackNavigator = createNativeStackNavigator();
const StackNavigation: FC<StackNavigationProps> = ({pages}) => {
    return (
        <StackNavigator.Navigator
        >
            {pages.map(page =>
                <StackNavigator.Screen
                    key={page.name}
                    name={page.name}
                    component={page.component}
                    options={{
                        header: (props) => <CustomStackHeader {...props} label={page.label}/>
                    }}
                />
            )}
        </StackNavigator.Navigator>
    );
}

export default StackNavigation;