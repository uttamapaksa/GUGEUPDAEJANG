import ApexCharts from 'apexcharts';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

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
  height: 8%;
  width: 96%;
  padding: 1.8% 2% 0.2% 2%;
`

const Title = styled.div`
  font-size: 2.5vh;
  font-weight: 600;
`

const Chart = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
`;

const KtasChart = () => {
  const chartRef = useRef(null);
  const currentDate = new Date();

  const requestData = {
    'KTAS1' : [42, 55, 41, 67, 22, 43, 44], 
    'KTAS2' : [60, 55, 41, 67, 22, 43, 44], 
    'KTAS3' : [44, 55, 41, 67, 22, 43, 44], 
    'KTAS4' : [44, 55, 41, 67, 22, 43, 44], 
    'KTAS5' : [44, 55, 41, 67, 22, 43, 44], 
  };

  const dates = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - i);
    dates.push(date.toLocaleDateString('ko-KR', {
      month: '2-digit',
      day: '2-digit',
      weekday: 'short'
    }));
  }

  useEffect(() => {
    const options = {
      // 데이터
      series: [
        {
          name: 'KTAS 1',
          data: requestData["KTAS1"]
        }, {
          name: 'KTAS 2',
          data: requestData["KTAS2"]
        }, {
          name: 'KTAS 3',
          data: requestData["KTAS3"]
        }, {
          name: 'KTAS 4',
          data: requestData["KTAS4"]
        }, {
          name: 'KTAS 5',
          data: requestData["KTAS5"]
        }
      ],

      // 차트
      chart: {
        height: "86%",
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      
      // x축
      xaxis: {
        categories: dates
      },
      
      // y축
      yaxis: {
        min: 0,
        max: 400,
        tickAmount: 4,
      },

      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 2
        },
      },

      colors: [
        '#006FBA', 
        '#EE1D23', 
        '#FFF101', 
        '#40AE49', 
        '#EDEDED'
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
        <Title>일별 요청 분류(KTAS)</Title>
      </ChartHeader>
      <Chart ref={chartRef} />
    </Container>
  );
};

export default KtasChart;
