import { TransferListContainer } from "./TransferList.style";
import { useRecoilState, useRecoilValue } from "recoil";
import { hospitalSelectedTransferItem, hospitalTransferList } from "../../../../../../recoils/HospitalAtoms";
import { useEffect } from "react";
import { HospitalTransferItem } from "/src/types/map";
import TransferListItem from "../TransferListItem/TransferListItem";
import TransferDetail from "../TransferDetail/TransferDetail";

const TransferList = () => {
    const [selectedTransferItem, setSelectedTransferItem] = useRecoilState(hospitalSelectedTransferItem);
    const transferList = useRecoilValue(hospitalTransferList);

    const selectParaDetail = (item: HospitalTransferItem | undefined) => {
        setSelectedTransferItem(item);
    }

    useEffect(() => {
        console.log(transferList)
    }, [transferList])

    return (
        <>
            <TransferListContainer>
                {transferList !== undefined ?
                    <>
                        {transferList.map((item, index) => (
                            <TransferListItem {...item} key={index}
                                onclick={() => selectParaDetail(item)}
                                isSelected={(selectedTransferItem !== undefined && selectedTransferItem.id == item.id)}
                            />
                        ))}
                    </> :
                    <></>
                }
            </TransferListContainer>
            {selectedTransferItem !== undefined ? <TransferDetail {...selectedTransferItem} onclick={() => selectParaDetail(undefined)}></TransferDetail>
                :
                <></>}
        </>
    );
};

export default TransferList;