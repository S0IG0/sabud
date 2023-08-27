import {FC} from "react";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";
import {SafeAreaView} from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import {settingsIconsCircles} from "./TabButton";
import {StyleSheet, Text} from "react-native";
import commonStyles from "./commonStyles";

interface Props extends NativeStackHeaderProps {
    label: string
}

const CustomStackHeader: FC<Props> = (props) => {
    const {back, label, navigation} = props;
    return (
        <SafeAreaView
            style={[styles.header, !back && {
                width: 0,
                height: 0,
            }]}
        >
            {back &&
                <>
                    <Ionicons
                        name={'chevron-back-circle-outline'}
                        onPress={() => navigation.goBack()}
                        size={settingsIconsCircles.size * 1.5}
                    />
                    <SafeAreaView
                        style={[styles.label,]}
                    >
                        <Text
                            style={[styles.text,]}
                        >{label}</Text>
                    </SafeAreaView>
                </>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        ...commonStyles.navigationColor,
    },
    label: {
        // backgroundColor: "red",
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
    }
});

export default CustomStackHeader;