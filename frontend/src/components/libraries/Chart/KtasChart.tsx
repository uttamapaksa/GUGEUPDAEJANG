import ApexCharts from 'apexcharts';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const KtasChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [{
        name: 'KTAS 1',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'KTAS 2',
        data: [13, 23, 20, 8, 13, 27]
      }, {
        name: 'KTAS 3',
        data: [11, 17, 15, 15, 21, 14]
      }, {
        name: 'KTAS 4',
        data: [21, 7, 25, 13, 22, 8]
      }, {
        name: 'KTAS 5',
        data: [21, 7, 25, 13, 22, 8]
      }],
      chart: {
        type: 'bar',
        height: "98%",
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5
        },
      },
      title: {
        text: '알별 요청 분류(KTAS)',
        align: 'left'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT',
          '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'
        ],
      },
      colors: [
        '#006FBA', 
        '#EE1D23', 
        '#FFF101', 
        '#40AE49', 
        '#EDEDED'
      ],
      legend: {
      },
      fill: {
        opacity: 1
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <ChartContainer ref={chartRef} />
  );
};

export default KtasChart;
