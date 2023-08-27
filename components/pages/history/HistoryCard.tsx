import {Text, View, StyleSheet} from "react-native";
import {History} from "./HistoryList";
import {FC} from "react";
import commonStyle from "../../ui/commonStyle";
import CustomButton from "../../ui/CustomButton";
import {Names} from "../../navigation/pages";
import {NavigationProp, useNavigation} from "@react-navigation/native";

interface Props {
    history: History;
}

const HistoryCard: FC<Props> = ({history}) => {
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <View style={[commonStyle, styles.content]}>
            <Text
                style={[styles.text,]}
            >Карточка истори</Text>
            <Text
                style={[styles.text,]}
            >{history.title}</Text>
            <CustomButton
                onPress={() => navigation.navigate(Names.HISTORY_DETAIL, {
                    id: history.id
                })}
            >
                <Text style={[{fontWeight: "bold",}]}>Читать все</Text>
            </CustomButton>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    text: {
        fontWeight: "bold",
    }
});
export default HistoryCard;