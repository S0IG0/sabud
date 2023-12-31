import { NavigationContainer} from "@react-navigation/native";
import {Names, tabPages} from "../pages";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Auth from "../../store/Auth";
import {observer} from "mobx-react-lite";
import {StyleSheet} from "react-native";
import TabButton from "./TabButton";
import commonStyles from "./commonStyles";



const BottomTabNavigator = createBottomTabNavigator();
const TabNavigation = observer(() => {
    const isAuth = Auth.isAuth;
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator
                initialRouteName={isAuth ? Names.HOME : Names.LOGIN}
                sceneContainerStyle={{
                    backgroundColor: "primary"
                }}
                screenOptions={{
                    tabBarStyle: styles.tabBar,
                }}
            >
                {Array.from(tabPages.values()).map(page =>
                    ((isAuth && page.name !== Names.LOGIN) ||
                        (!isAuth && page.name === Names.LOGIN)) &&
                    <BottomTabNavigator.Screen
                        key={page.name}
                        name={page.name}
                        component={page.component}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton {...props} page={page}/>,
                        }}
                    />
                )}
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
});

const styles = StyleSheet.create({
    tabBar: {
        height: "10%",
        position: 'absolute',
        bottom: "3%",
        right: "3%",
        left: "3%",
        borderRadius: 16,
        borderTopWidth: 0,
        ...commonStyles.navigationColor,
    },
});

export default TabNavigation;

