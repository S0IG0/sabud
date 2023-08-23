import Navigation from "./components/navigation/ui/Navigation";
import {View, StyleSheet} from "react-native";

const App = () => {
    return (
        <View
            style={[styles.app,]}
        >
            <Navigation></Navigation>
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(240,240,240)",
        // backgroundColor: "rgb(220,220,220)",
    }
});

export default App;