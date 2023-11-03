import React, { useState, useCallback } from 'react'

import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'

import Button from '@inovua/reactdatagrid-community/packages/Button'

const DATASET_URL='https://localhost:64419/calling/history';

const gridStyle = { minHeight: 600, marginTop: 10 };

const defaultFilterValue = [
  { name: 'firstName', type: 'string', operator: 'contains', value: 'o' },
  { name: 'lastName', type: 'string', operator: 'contains', value: '' },
  { name: 'email', type: 'string', operator: 'contains', value: '' }
];

const columns = [
  { name: 'id', header: 'Id', defaultVisible: false, type: 'number', defaultWidth: 60 },
  { name: 'firstName', header: 'First Name', defaultFlex: 1 },
  { name: 'lastName', header: 'Last Name', defaultFlex: 1 },
  { name: 'email', header: 'Email', groupBy: false, defaultFlex: 1 }
];

const loadData = ({ skip, limit, sortInfo, groupBy, filterValue }:any) => {
  console.log(skip, limit, sortInfo, groupBy, filterValue);
  return [{id:1, firstName:"hello", lastName:"lastlast", email:"email@eamil"}, {id:2, firstName:"sssecond", lastName:"my-last", email:"secdd@eamil"}]
  
  // return fetch(DATASET_URL + '?skip='+skip+'&limit='+limit+(groupBy && groupBy.length?'&groupBy='+groupBy:'')+'&sortInfo='+JSON.stringify(sortInfo) + '&filterBy='+JSON.stringify(filterValue))
  //   .then(response => {
  //     console.log("===============data grid===============")
  //     console.log(response.body)
  //     const totalCountStr = response.headers.get('X-Total-Count');
      
  //     if (!totalCountStr) {
  //       throw new Error("X-Total-Count header is missing");
  //     }
      
  //     const totalCount = parseInt(totalCountStr, 10);
  //     if (isNaN(totalCount)) {
  //       throw new Error("X-Total-Count header is not a valid number");
  //     }
      
  //     return response.json().then(data => {
  //       return { data, count: totalCount };
  //     })
  //   })
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