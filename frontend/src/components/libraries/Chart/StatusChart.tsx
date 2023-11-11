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

const StatusChart = () => {
  const chartRef = useRef(null);
  const requestData = [44, 55, 13, 43, 22, 30]

  useEffect(() => {
    const options = {
      series: requestData,
      chart: {
        width: "95%",
        type: 'pie',
      },
      labels: ['승인', '거절', '대기', '철회', '확정', '취소'],
      colors: [
        '#008FFB', 
        '#00E396', 
        '#FF4560', 
        '#FFEB3B', 
        '#775DD0', 
        '#B7B7B7',
      ],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: "95%"
          },
          legend: {
            position: 'bottom'
          }
        }
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

export default StatusChart;
