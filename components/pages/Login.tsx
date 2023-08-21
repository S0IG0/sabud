import {Pressable, Text, View} from "react-native";
import Auth from "../store/Auth";

const Login = () => {
    const login = () => {
        Auth.isAuth = true;
    }
    return (
        <View>
            <Text>Login</Text>
            <Pressable
                onPress={login}
            >
                <Text>login</Text>
            </Pressable>
        </View>
    );
}

export default Login;