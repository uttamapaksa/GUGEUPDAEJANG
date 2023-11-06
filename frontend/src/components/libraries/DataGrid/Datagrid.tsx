import React, { useState, useCallback } from 'react'

import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter'
import DateFilter from '@inovua/reactdatagrid-community/DateFilter'
import moment from 'moment'

const gridStyle = { minHeight: 600, marginTop: 10 };
const GENDER: {[key: string]: string} = { MALE: '남성', FEMALE: '여성'};
const gender = [{id: 'MALE', label: '남성'}, {id: 'FEMALE', label: '여성'}];
const AGEGROUP: {[key: string]: string} = { INFANT: '영유아', CHILD: '어린이', ADOLESCENT: '청소년', YOUTH: '청년', MIDDLE: '중장년', SENIOR: '노년'}
const ageGroup = [{id: 'INFANT', label: '영유아'}, {id: 'CHILD', label: '어린이'}, {id: 'ADOLESCENT', label: '청소년'}, {id: 'YOUTH', label: '청년'}, {id: 'MIDDLE', label: '중장년'}, {id: 'SENIOR', label: '노년'}];
const ktas = [{id: 'KTAS1', label: 'KTAS1'}, {id: 'KTAS2', label: 'KTAS2'}, {id: 'KTAS3', label: 'KTAS3'}, {id: 'KTAS4', label: 'KTAS4'}, {id: 'KTAS5', label: 'KTAS5'}]

const defaultFilterValue = [
  { name: 'id', type: 'string', operator: 'contains', value: '' },
  { name: 'ageGroup', type: 'select', operator: 'eq', value: '' },
  { name: 'gender', type: 'select', operator: 'eq', value: '' },
  { name: 'tags', type: 'string', operator: 'contains', value: '' },
  { name: 'address', type: 'string', operator: 'contains', value: '' },
  { name: 'callingTime', type: 'date', operator: 'inrange', value: '' },
  { name: 'replyTime', type: 'date', operator: 'inrange', value: '' },
  { name: 'ktas', type: 'select', operator: 'eq', value: '' }
];

const columns = [
  { name: 'id', header: '고유번호', type: 'number', defaultFlex: 1 },
  { name: 'ageGroup', header: '연령대', defaultFlex: 1, filterEditor: SelectFilter, filterEditorProps: { placeholder: 'All', dataSource: ageGroup }, render: ({ value }: { value: string })=> AGEGROUP[value]},
  { name: 'gender', header: '성별', defaultFlex: 1, filterEditor: SelectFilter, filterEditorProps: { placeholder: 'All', dataSource: gender }, render: ({ value }: { value: string })=> GENDER[value] },
  { name: 'tags', header: '주요 분류', defaultFlex: 1 },
  { name: 'address', header: '주소', defaultFlex: 3 },
  { name: 'callingTime', header: '요청 시간', type: 'date', defaultFlex: 2, dateFormat: 'YYYY/MM/DD HH:mm A', filterEditor: DateFilter, 
    filterEditorProps: (_props:any, { index } : {index:number}) => { return { placeholder: index == 1? '시작': '끝' }},
    render: ({ value, cellProps: { dateFormat } } : {value:any, cellProps:any}) => moment(value).format(dateFormat), 
  },
  { name: 'replyTime', header: '응답 시간', type: 'date', defaultFlex: 2, dateFormat: 'YYYY/MM/DD HH:mm A', filterEditor: DateFilter, 
    filterEditorProps: (_props:any, { index } : {index:number}) => { return { placeholder: index == 1? '시작': '끝' }},
    render: ({ value, cellProps: { dateFormat } } : {value:any, cellProps:any}) => moment(value).format(dateFormat), 
  },

  { name: 'ktas', header: 'KTAS', filterEditor: SelectFilter, filterEditorProps: { placeholder: 'All', dataSource: ktas }, render: ({ value }: { value: string })=> value},
];

const loadData = ({ skip, limit, sortInfo, groupBy, filterValue }:any) => {
  console.log("============Datagrid.tsx에서 콘솔 삭제==========");
  console.log(skip, limit, sortInfo, groupBy, filterValue);
  console.log(filterValue);
  console.log("------------------------------------------------");
  console.log("이걸로 요청 보내기 ~/calling/history?skip=" + skip + "&limit=" + limit + "&sortInfo=" + JSON.stringify(sortInfo) + "&groupBy=" + JSON.stringify(groupBy) + "&filterValue=" + JSON.stringify(filterValue));
  console.log("===============================================");

  const dummyData = [
    { id: '3432', ageGroup: 'INFANT', gender: 'FEMALE', tags: '두통', address: '123 덕명동', callingTime: '2023/02/15 9:00 AM', replyTime: '2023/02/15 10:00 AM', ktas: 'KTAS3' },
    { id: '1234', ageGroup: 'YOUTH', gender: 'MALE', tags: '과다출혈', address: '456 유성온천', callingTime: '2023/02/15 10:30 AM', replyTime: '2023/02/15 11:45 AM', ktas: 'KTAS4' },
    { id: '5678', ageGroup: 'SENIOR', gender: 'FEMALE', tags: 'tag3', address: '789 금호동', callingTime: '2023/10/11 2:00 PM', replyTime: '2023/06/15 2:30 PM', ktas: 'KTAS2' },
    { id: '9876', ageGroup: 'INFANT', gender: 'MALE', tags: 'tag1', address: '321 봉명동', callingTime: '2023/04/16 3:45 PM', replyTime: '2023/04/15 4:15 PM', ktas: 'KTAS1' },
    { id: '6543', ageGroup: 'ADOLESCENT', gender: 'MALE', tags: 'tag2', address: '654 궁동', callingTime: '2023/11/03 5:30 PM', replyTime: '2023/03/03 6:00 PM', ktas: 'KTAS3' }
  ];
  
  return dummyData;
}

const DataGrid = () => {
  const [filterValue, setFilterValue] = useState(defaultFilterValue);
  const [, setSortInfo] = useState([]);
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
        onSortInfoChange={()=>setSortInfo}
        onFilterValueChange={()=>setFilterValue}
      />
    </div>
  );
}

export default DataGrid;