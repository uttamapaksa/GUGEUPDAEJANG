import ParamedicDetail from "../TransferDetail/TransferDetail";
import ParamedicListItem from "../TransferListItem/TransferListItem";
import { TransferListContainer } from "./TransferList.style";
import { useRecoilState, useRecoilValue } from "recoil";
import { hospitalRequestList, hospitalSelectedParaId } from "../../../../../../recoils/HospitalAtoms";
import { useEffect } from "react";
import { ParaRequestItem } from "/src/types/map";

const TransferList = () => {
    const [paraItem, setParaItem] = useRecoilState(hospitalSelectedParaId);
    const requestList = useRecoilValue(hospitalRequestList);

    const selectParaDetail = (item: ParaRequestItem | undefined) => {
        setParaItem(item);
    }

    useEffect(() => {
        console.log(requestList)
      }, [requestList])

    return (
        <>
            <TransferListContainer>
                {requestList !== undefined ?
                    <>
                        {requestList.map((item, index) => (
                            <ParamedicListItem {...item} key={index}
                                onclick={() => selectParaDetail(item)}
                                isSelected={(paraItem !== undefined && paraItem.id == item.id)}
                            />
                        ))}
                    </> :
                    <></>
                }
            </TransferListContainer>
            {paraItem !== undefined ? <ParamedicDetail {...paraItem} onclick={() => selectParaDetail(undefined)}></ParamedicDetail>
                :
                <></>}
        </>
    );
};

export default TransferList;