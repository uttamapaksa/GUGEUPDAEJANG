import React, { useState, useCallback } from 'react'

import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'
import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter'
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter'
import DateFilter from '@inovua/reactdatagrid-community/DateFilter'

const DATASET_URL='https://localhost:64419/calling/history';

const gridStyle = { minHeight: 600, marginTop: 10 };
const GENDER = {
  male: 'MALE',
  femail: 'FEMALE'
}

const defaultFilterValue = [
  { name: 'id', type: 'string', operator: 'contains', value: '' },
  { name: 'ageGroup', type: 'string', operator: 'contains', value: '' },
  { name: 'gender', type: 'select', operator: 'eq', value: '' },
  { name: 'tags', type: 'string', operator: 'contains', value: '' },
  { name: 'address', type: 'string', operator: 'contains', value: '' },
  { name: 'callingTime', type: 'string', operator: 'contains', value: '' },
  { name: 'replyTime', type: 'string', operator: 'contains', value: '' },
  { name: 'memberId', type: 'string', operator: 'contains', value: '' }
];

const columns = [
  { name: 'id', header: '고유번호', defaultVisible: false, type: 'number', defaultWidth: 60 },
  { name: 'ageGroup', header: '연령대', defaultFlex: 1 },
  { name: 'gender', header: '성별', defaultFlex: 1, filterEditor: SelectFilter, filterEditorProps: {
    placeholder: 'All',
    dataSource: GENDER
  },
  render: ({ value })=> GENDER[value]? GENDER[value]: value },
  { name: 'tags', header: '주요 분류', groupBy: false, defaultFlex: 1 },
  { name: 'address', header: '주소', groupBy: false, defaultFlex: 1 },
  { name: 'callingTime', header: '요청 시간', groupBy: false, defaultFlex: 1 },
  { name: 'replyTime', header: '응답 시간', groupBy: false, defaultFlex: 1 },
  { name: 'memberId', header: '담당자', groupBy: false, defaultFlex: 1 },
];

const loadData = ({ skip, limit, sortInfo, groupBy, filterValue }:any) => {
  console.log(skip, limit, sortInfo, groupBy, filterValue);
  console.log(filterValue[0]);

  // TODO: 여기에 api 호출
  const dummyData = [
    { id: '3432', ageGroup: 'youth', gender: 'MALE', tags: '두통', address: '123 덕명동', callingTime: '9:00 AM', replyTime: '10:00 AM', memberId: '이시영' },
    { id: '1234', ageGroup: 'adult', gender: 'FEMALE', tags: '과다출혈', address: '456 유성온천', callingTime: '10:30 AM', replyTime: '11:45 AM', memberId: '이승종' },
    { id: '5678', ageGroup: 'senior', gender: 'MALE', tags: 'tag3', address: '789 금호동', callingTime: '2:00 PM', replyTime: '2:30 PM', memberId: '김수연' },
    { id: '9876', ageGroup: 'youth', gender: 'FEMALE', tags: 'tag1', address: '321 봉명동', callingTime: '3:45 PM', replyTime: '4:15 PM', memberId: '김준섭' },
    { id: '6543', ageGroup: 'adult', gender: 'MALE', tags: 'tag2', address: '654 궁동', callingTime: '5:30 PM', replyTime: '6:00 PM', memberId: '정현우' }
  ];
  
  return dummyData;
}

const DataGrid = () => {
  const [filterValue, setFilterValue] = useState(defaultFilterValue);
  const [sortInfo, setSortInfo] = useState([]);

  const dataSource = useCallback(loadData, [])

  return (
    <div>
      <h3>Remote filtering & sorting example with pagination</h3>
      <div style={{ height: 80 }} >Current filterValue: {filterValue ? <code>{JSON.stringify(filterValue, null, 2)}</code>: 'none'}.</div>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        defaultFilterValue={defaultFilterValue}
        defaultGroupBy={[]}
        pagination
        dataSource={dataSource}
        onSortInfoChange={setSortInfo}
        onFilterValueChange={setFilterValue}
      />
    </div>
  );
}

export default DataGrid;