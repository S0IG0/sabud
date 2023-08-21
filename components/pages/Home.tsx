import {Pressable, Text, View} from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Names} from "../navigation/pages";

const Home = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <View>
            <Text>Home</Text>
            <Pressable
                onPress={() => navigation.navigate(Names.SALARY)}
            >
                <Text>go salary</Text>
            </Pressable>
        </View>
    );
}

export default Home;