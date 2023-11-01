import ParamedicDetail from "../ParamedicDetail/ParamedicDetail";
import ParamedicListItem from "../ParamedicItem/ParamedicListItem";
import { ParamedicListContainer } from "./ParamedicList.style";
import { MapProps, ParamedicItem } from "/src/types/map";
import { useRecoilState } from "recoil";
import { hospitalSelectedParaId } from "../../../../../recoils/HospitalAtoms";

const ParamedicList = (props: MapProps) => {
    const [paraItem, setParaItem] = useRecoilState(hospitalSelectedParaId);

    const selectParaDetail = (props: ParamedicItem | undefined) => {
        setParaItem(props);
    }

    return (
        <>
            <ParamedicListContainer>
                {props.parList !== undefined ?
                    <>
                        {props.parList.map((item, index) => (
                            <ParamedicListItem {...item} key={index}
                                onclick={() => selectParaDetail(item)}
                                isSelected={(paraItem !== undefined && paraItem.id == item.id)}
                            />
                        ))}
                    </> :
                    <></>
                }
            </ParamedicListContainer>
            {paraItem !== undefined ? <ParamedicDetail {...paraItem} onclick={() => selectParaDetail(undefined)}></ParamedicDetail>
                :
                <></>}
        </>
    );
};

export default ParamedicList;