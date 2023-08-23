import {Animated, Dimensions, Easing, Pressable, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {StyleSheet} from "react-native";
import {useRef} from "react";
import {Props} from "../index";
import commonStyles from "./commonStyles";

const HEIGHT = Dimensions.get("window").height;

const AnimateConfig = {
    duration: 200,
    easing: Easing.ease,
    useNativeDriver: true,
}

const settings = {
    selectedColor: "black",
    unSelectedColor: "black",
    size: HEIGHT / 22,
    circleActive: {
        size: HEIGHT / 17,
    },
    circleBottom: {
        size: HEIGHT / 13.5,
    },
}

function startAnimation(animatedValue: Animated.Value, toValue: number) {
    return Animated.timing(animatedValue, {
        toValue,
        ...AnimateConfig,
    }).start();
}

const TabButton = (props: Props) => {
    const {page, onPress, accessibilityState} = props;
    const isSelected = accessibilityState?.selected;

    const opacityIcon = useRef(new Animated.Value(0)).current;
    const scaleIcon = useRef(new Animated.Value(1)).current;
    const translateYCirclesAndIcon = useRef(new Animated.Value(0)).current;
    const scaleCircleBottom = useRef(new Animated.Value(0)).current;
    const opacityText = useRef(new Animated.Value(0)).current;
    const scaleCircleActive = useRef(new Animated.Value(0.8)).current;
    const opacityCircleActive = useRef(new Animated.Value(0)).current;


    startAnimation(opacityIcon, isSelected ? 1 : 0.5);
    startAnimation(scaleIcon, isSelected ? 1.2 : 1);
    startAnimation(translateYCirclesAndIcon, isSelected ? -(Dimensions.get("window").height / 30) : 0);
    startAnimation(scaleCircleBottom, isSelected ? 1.3 : 0);
    startAnimation(opacityText, isSelected ? 1 : 0);
    startAnimation(scaleCircleActive, isSelected ? 1.3 : 0.8);
    startAnimation(opacityCircleActive, isSelected ? 0.6 : 0);

    return (
        <Pressable
            onPress={onPress}
            style={[styles.container,]}
        >
            <View
                style={styles.container}
            >
                <Animated.View
                    style={[styles.circleBottom, {
                        transform: [
                            {scale: scaleCircleBottom},
                            {translateY: translateYCirclesAndIcon},
                        ],
                    },
                    ]}
                />
                <Animated.View
                    style={[styles.circleOrange, {
                        opacity: opacityCircleActive,
                        transform: [
                            {scale: scaleCircleActive},
                            {translateY: translateYCirclesAndIcon},
                        ],
                    },
                    ]}
                />
                <Animated.View
                    style={[{
                        position: "absolute",
                        opacity: opacityIcon,
                        transform: [
                            {scale: scaleIcon},
                            {translateY: translateYCirclesAndIcon},
                        ],
                    },]}
                >
                    <Ionicons
                        name={isSelected ? page.icon.focused : page.icon.default}
                        color={isSelected ? settings.selectedColor : settings.unSelectedColor}
                        size={settings.size}
                    />
                </Animated.View>
            </View>
            <Animated.View
                style={[styles.text, {
                    opacity: opacityText
                }]}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: HEIGHT / 45,
                    }}
                >{page.label}</Text>
            </Animated.View>

        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    circleOrange: {
        width: settings.circleActive.size,
        height: settings.circleActive.size,
        borderRadius: settings.circleActive.size / 2,
        position: "absolute",
        ...commonStyles.iconActive,
    },
    circleBottom: {
        width: settings.circleBottom.size,
        height: settings.circleBottom.size,
        borderRadius: settings.circleBottom.size / 2,
        position: "absolute",
        ...commonStyles.bottomBar,
    },
    text: {
        position: "absolute",
        top: "55%",
        textTransform: "capitalize",
    }
});

export default TabButton;