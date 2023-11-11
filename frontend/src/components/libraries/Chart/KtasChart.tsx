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

  const requestData = {
    'KTAS1' : [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43,], 
    'KTAS2' : [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43,], 
    'KTAS3' : [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43,], 
    'KTAS4' : [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43,], 
    'KTAS5' : [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43,], 
  };

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
        type: 'datetime',
        categories: [
          '10/25/2023', '10/26/2023', '10/27/2023',
          '10/28/2023', '10/29/2023', '10/30/2023',
          '10/31/2023', '11/01/2023', '11/02/2023',
          '11/03/2023', '11/04/2023', '11/05/2023',
          '11/06/2023', '11/07/2023', '11/08/2023',
          '11/09/2023', '11/10/2023', '11/11/2023',
        ],
        max: "11/11/2023", 
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
