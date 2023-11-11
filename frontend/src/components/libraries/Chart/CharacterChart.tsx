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

const CharacterChart = () => {
  const chartRef = useRef(null);

  const requestData = {
    'age' : [280, 290, 330, 360, 320, 320, 330, 290, 330],
    'male' : [160, 180, 190, 150, 250, 190, 200, 170, 220],
    'female' : [120, 110, 140, 108, 107, 130, 130, 120, 110],
  }

  useEffect(() => {
    const options = {
      series: [{
        name: '연령대',
        data: requestData["age"]
      }, {
        name: '남성',
        data: requestData["male"]
      }, {
        name: '여성',
        data:  requestData["female"]
      }],
      chart: {
        type: 'bar',
        height: '100%',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['10대 이하', '10대', '20대', '30대', '40대', '50대', '60대', '70대', '70대 이상'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // 컴포넌트 언마운트시 차트 제거
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <ChartContainer ref={chartRef} />
  );
};

export default CharacterChart;
