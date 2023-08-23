import {Text, StyleSheet, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import Auth from "../store/Auth";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";
import {useState} from "react";

interface User {
    username: string,
    password: string,
}

const Login = () => {
    const [user, setUser] = useState<User>({username: "", password: ""});
    const login = () => Auth.setIsAuth(true);

    return (
        <SafeAreaView style={[styles.container,]}>
            <View
                style={[styles.content,]}
            >
                <Text style={[{fontWeight: "bold", fontSize: 40, bottom: 20, textAlign: "center"}]}>САБУД</Text>
                <CustomInput
                    onChange={event =>
                        setUser({...user, username: event.nativeEvent.text})
                    }
                    value={user.username}
                    placeholder="логин"
                />
                <CustomInput
                    onChange={event =>
                        setUser({...user, password: event.nativeEvent.text})
                    }
                    value={user.password}
                    secureTextEntry
                    placeholder="пароль"
                />
                <CustomButton
                    onPress={login}
                >
                    <Text style={[{fontWeight: "bold",},]}>Войти</Text>
                </CustomButton>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "83%",
    },
    text: {
        fontWeight: "bold",
    },
    content: {
        width: "80%",
    },
});

export default Login;