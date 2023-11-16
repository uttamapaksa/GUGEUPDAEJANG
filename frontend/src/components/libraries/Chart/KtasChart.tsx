import ApexCharts from 'apexcharts';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { KtasType } from '/src/types/report';

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

const KtasChart = ({ktasValue}:{ktasValue?: KtasType}) => {
  const chartRef = useRef(null);
  const currentDate = new Date();

  const requestData = {
    'KTAS1' : ktasValue?.ktas1, 
    'KTAS2' : ktasValue?.ktas2, 
    'KTAS3' : ktasValue?.ktas3, 
    'KTAS4' : ktasValue?.ktas4, 
    'KTAS5' : ktasValue?.ktas5, 
  };

  const calculateMaxData = () => {
    const sums = [];
    for (let i = 0; i < (requestData['KTAS1']?.length || 0); i++) {
      let sum = 0;
      for (const key in requestData) {
        sum += requestData[key][i] || 0;
      }
      sums.push(sum);
    }
    return Math.ceil(Math.max(...sums)/10) * 10 + 10;
  };

  const MaxData = calculateMaxData();

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
        max: MaxData,
        tickAmount: 5,
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
