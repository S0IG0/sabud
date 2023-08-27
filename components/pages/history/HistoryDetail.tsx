import {Text} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useRoute} from "@react-navigation/native";


type RootStackParamList = {
    HistoryDetail: {id: number};
};

type HistoryDetailScreenProps = NativeStackScreenProps<RootStackParamList, "HistoryDetail">;


const HistoryDetail = () => {
    const route = useRoute<HistoryDetailScreenProps["route"]>();
    console.log(route.params)
    return (
        <>
            <Text>{route.params.id}</Text>
        </>
    );
}

export default HistoryDetail;