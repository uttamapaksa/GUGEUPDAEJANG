import ApexCharts from 'apexcharts';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { StatusType } from '/src/types/report';

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ChartHeader = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 94%;
  padding: 2% 3% 0% 3%;
`

const Title = styled.div`
  font-size: 2.5vh;
  font-weight: 600;
`

const Chart = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
`;

const StatusChart = ({statusValue}:{statusValue?: StatusType}) => {
  const chartRef = useRef(null);
  const requestData = statusValue?.dailyStatusList

  useEffect(() => {
    const options = {
      // 데이터
      series: requestData,

      // 차트
      chart: {
        height: "86%",
        type: 'pie',
      },

      // 범례
      legend: {
        position: 'right',
        markers: {
          width: 10,
          height: 10,
        },
        itemMargin: {
          horizontal: 15,
          vertical: -3
        },
        fontSize: '12px',
        fontWeight: 600,
      },

      labels: [
        '승인', '거절', '대기', 
        '철회', '확정', '취소'
      ],
      
      colors: [
        '#008FFB', 
        '#00E396', 
        '#FF4560', 
        '#FFEB3B', 
        '#775DD0', 
        '#B7B7B7',
      ],
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Container>
      <ChartHeader>
        <Title>당일 요청 상태 비율</Title>
      </ChartHeader>
      <Chart ref={chartRef} />
    </Container>
  );
};

export default StatusChart;
