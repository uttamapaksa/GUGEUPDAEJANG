import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { startTimeState, endTimeState } from '/src/recoils/ParamedicAtoms';


function ParamedicCalender() {
  const [startTime, setStartTime] = useRecoilState(startTimeState);
  const [endTime, setEndTime] = useRecoilState(endTimeState);
  const [state, setState] = useState([
    {
      startDate: startTime,
      endDate: endTime,
      key: 'selection',
    },
  ]);

  const selectDate = (item: any) => {
    setState(item);
    setEndTime(item[0].endDate);
    setStartTime(item[0].startDate);
  };

  return (
    <>
      <DateRange
        locale={locales['ko']}
        editableDateInputs={true}
        onChange={(item) => selectDate([item.selection])}
        moveRangeOnFirstSelection={false} 
        ranges={state}
      />
    </>
  );
}

export default ParamedicCalender;