import {TextInput, TextInputProps} from "react-native";
import commonStyle from "./commonStyle";
import {FC} from "react";

const CustomInput: FC<TextInputProps> = (props) => {
    const {style} = props;
    return (
        <>
            <TextInput
                {...props}
                style={[commonStyle, style]}
            >
            </TextInput>
        </>
    );
}


export default CustomInput;