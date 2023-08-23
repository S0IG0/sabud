import {Text} from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context"
import {Names} from "../navigation/pages";
import CustomButton from "../ui/CustomButton";
import Auth from "../store/Auth";

const Home = () => {
    const logout = () => Auth.setIsAuth(false);
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <SafeAreaView>
            <Text>Home</Text>
            <CustomButton
                onPress={() => navigation.navigate(Names.SALARY)}
            >
                <Text style={[{fontWeight: "bold",}]}>go salary</Text>
            </CustomButton>
            <CustomButton
                onPress={logout}
            >
                <Text style={[{fontWeight: "bold",}]}>logout</Text>
            </CustomButton>
        </SafeAreaView>
    );
}

export default Home;