import {Animated, Easing, Pressable, Text} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {StyleSheet} from "react-native";
import {useRef} from "react";
import {Props} from "./index";

const AnimateConfig = {
    duration: 200,
    easing: Easing.ease,
    useNativeDriver: true,
}

const settings = {
    selectedColor: "black",
    unSelectedColor: "black",
    size: 30,
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
    const scaleCircleOrange = useRef(new Animated.Value(0.8)).current;
    const opacityCircleOrange = useRef(new Animated.Value(0)).current;


    startAnimation(opacityIcon, isSelected ? 1 : 0.5);
    startAnimation(scaleIcon, isSelected ? 1.2 : 1);
    startAnimation(translateYCirclesAndIcon, isSelected ? -20 : 0);
    startAnimation(scaleCircleBottom, isSelected ? 1.3 : 0);
    startAnimation(opacityText, isSelected ? 1 : 0);
    startAnimation(scaleCircleOrange, isSelected ? 1.3 : 0.8);
    startAnimation(opacityCircleOrange, isSelected ? 0.6 : 0);

    return (
        <Pressable
            onPress={onPress}
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
                    opacity: opacityCircleOrange,
                    transform: [
                        {scale: scaleCircleOrange},
                        {translateY: translateYCirclesAndIcon},
                    ],
                },
                ]}
            />
            <Animated.View
                style={[styles.animate, {
                    opacity: opacityIcon,
                    transform: [
                        {scale: scaleIcon},
                        {translateY: translateYCirclesAndIcon},
                    ]
                }]}
            >
                <Ionicons
                    name={isSelected ? page.icon.focused : page.icon.default}
                    color={isSelected ? settings.selectedColor : settings.unSelectedColor}
                    size={settings.size}
                />
            </Animated.View>
            <Animated.View
                style={[styles.text, {
                    opacity: opacityText
                }]}
            >
                <Text style={{fontWeight: "bold"}}>{page.label}</Text>
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
    animate: {},
    circleOrange: {
        width: settings.size + 10,
        height: settings.size + 10,
        borderRadius: (settings.size + 10) / 2,
        backgroundColor: "orange",
        position: "absolute",
        opacity: 0.6,
    },
    circleBottom: {
        backgroundColor: "white",
        width: settings.size + 20,
        height: settings.size + 20,
        borderRadius: (settings.size + 20) / 2,
        position: "absolute",
    },
    text: {
        position: "absolute",
        top: "55%",
        textTransform: "capitalize",
    }
});

export default TabButton;