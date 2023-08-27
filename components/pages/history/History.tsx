import StackNavigation from "../../navigation/ui/StackNavigation";
import {historyStackPages} from "../../navigation/pages";

const History = () => {
    return (
        <StackNavigation pages={Array.from(historyStackPages.values())}/>
    );
}

export default History;