import SrcItemList from "../../UIcomponents/SrcItemList";
import TitleCont from "../common/TitleCont";

const GroupContentComponent = (props) => {
    const { data, piso } = props;

    return <div>
        <TitleCont>Piso {piso}</TitleCont>
        <SrcItemList data={data} />
    </div>
}

export default GroupContentComponent;