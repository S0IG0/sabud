import {Dimensions, ScrollView, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import HistoryCard from "./HistoryCard";


export interface History {
    id: number
    title: string,
    content: string,
}

const histories: History[] = [
    {title: "1", content: "", id: 1},
    {title: "2", content: "", id: 2},
    {title: "3", content: "", id: 3},
    {title: "4", content: "", id: 4},
    {title: "5", content: "", id: 5},
    {title: "6", content: "", id: 6},
    {title: "7", content: "", id: 7},
    {title: "8", content: "", id: 8},
    {title: "9", content: "", id: 9},
    {title: "10", content: "", id: 10},
    {title: "11", content: "", id: 11},
    {title: "12", content: "", id: 12},
    {title: "13", content: "", id: 13},
    {title: "14", content: "", id: 14},
    {title: "15", content: "", id: 15},
    {title: "16", content: "", id: 16},
    {title: "17", content: "", id: 17},
    {title: "18", content: "", id: 18},
    {title: "19", content: "", id: 19},
]

const HistoryList = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                {histories.map(history =>
                    <HistoryCard history={history} key={history.id}/>
                )}
                <View
                    style={{width: "100%", height: (Dimensions.get("window").height / 5.5)}}
                ></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HistoryList;