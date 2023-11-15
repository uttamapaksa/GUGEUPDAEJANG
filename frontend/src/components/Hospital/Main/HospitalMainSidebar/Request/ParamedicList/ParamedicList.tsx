import ParamedicDetail from "../ParamedicDetail/ParamedicDetail";
import ParamedicListItem from "../ParamedicItem/ParamedicListItem";
import { ParamedicListContainer } from "./ParamedicList.style";
import { useRecoilState, useRecoilValue } from "recoil";
import { hospitalParmedicRequestList, hospitalSelectedRequestItem } from "../../../../../../recoils/HospitalAtoms";
import { useEffect } from "react";
import { ParaRequestItem } from "/src/types/map";

const ParamedicList = () => {
    const [selectedRequestItem, setsSelectedRequestItem] = useRecoilState(hospitalSelectedRequestItem);
    const requestList = useRecoilValue(hospitalParmedicRequestList);

    const selectParaDetail = (item: ParaRequestItem | undefined) => {
        setsSelectedRequestItem(item);
    }

    useEffect(() => {
        console.log("요청 리스트",requestList)
      }, [requestList])

    return (
        <>
            <ParamedicListContainer>
                {requestList !== undefined ?
                    <>
                        {requestList.map((item, index) => (
                            <ParamedicListItem {...item} key={index}
                                onclick={() => selectParaDetail(item)}
                                isSelected={(selectedRequestItem !== undefined && selectedRequestItem.id == item.id)}
                            />
                        ))}
                    </> :
                    <></>
                }
            </ParamedicListContainer>
            {selectedRequestItem !== undefined ? <ParamedicDetail onclick={() => selectParaDetail(undefined)}></ParamedicDetail>
                :
                <></>}
        </>
    );
};

export default ParamedicList;