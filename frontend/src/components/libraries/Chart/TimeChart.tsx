import ApexCharts from 'apexcharts';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const TimeChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const requestData = [
      440, 505, 414, 671, 227, 413, 201, 352, 352, 752, 320, 257,
    ];
    
    const options = {
      series: [{
        name: '요청 수',
        type: 'column',
        data: requestData
      }, ],
      chart: {
        height: "98%",
        type: 'line',
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        },
      },
      stroke: {
        width: [0, 3]
      },
      title: {
        text: '시간대별 요청',
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      xaxis: {
        labels: {
          rotate: -55
        },
        // categories: [
        //   '00:00 ~ 01:00', '01:00 ~ 02:00', '02:00 ~ 03:00', '03:00 ~ 04:00',
        //   '04:00 ~ 05:00', '05:00 ~ 06:00', '06:00 ~ 07:00', '07:00 ~ 08:00',
        //   '08:00 ~ 09:00', '09:00 ~ 10:00', '10:00 ~ 11:00', '11:00 ~ 12:00',
        //   '12:00 ~ 13:00', '13:00 ~ 14:00', '14:00 ~ 15:00', '15:00 ~ 16:00',
        //   '16:00 ~ 17:00', '17:00 ~ 18:00', '18:00 ~ 19:00', '19:00 ~ 20:00',
        //   '20:00 ~ 21:00', '21:00 ~ 22:00', '22:00 ~ 23:00', '23:00 ~ 24:00'
        // ],
        categories: [
          '00:00 ~ 02:00', '02:00 ~ 04:00', '04:00 ~ 06:00', '06:00 ~ 08:00',
          '08:00 ~ 10:00', '10:00 ~ 12:00', '12:00 ~ 14:00', '14:00 ~ 16:00',
          '16:00 ~ 18:00', '18:00 ~ 20:00', '20:00 ~ 22:00', '22:00 ~ 24:00'
        ],
        // categories: [
        //   '00 ~ 01', '01 ~ 02', '02 ~ 03', '03 ~ 04',
        //   '04 ~ 05', '05 ~ 06', '06 ~ 07', '07 ~ 08',
        //   '08 ~ 09', '09 ~ 10', '10 ~ 11', '11 ~ 12',
        //   '12 ~ 13', '13 ~ 14', '14 ~ 15', '15 ~ 16',
        //   '16 ~ 17', '17 ~ 18', '18 ~ 19', '19 ~ 20',
        //   '20 ~ 21', '21 ~ 22', '22 ~ 23', '23 ~ 24'
        // ],
      },
      yaxis: [{
        title: {
          text: '요청 수',
        },
        min: 0,
        max: 1000,
        tickAmount: 5,
      }]
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

export default TimeChart;
