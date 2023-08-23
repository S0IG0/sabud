import {Pressable, PressableProps, StyleProp, ViewStyle} from "react-native";
import {FC, ReactNode} from "react";
import commonStyle from "./commonStyle";

interface Props extends PressableProps {
    children: ReactNode
    style?: StyleProp<ViewStyle>;
}

const CustomButton: FC<Props> = (props) => {
    const {children, style} = props;
    return (
        <>
            <Pressable
                {...props}
                style={[commonStyle, style]}
            >
                {children}
            </Pressable>
        </>
    );
}


export default CustomButton;