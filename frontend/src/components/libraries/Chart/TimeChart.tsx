import ApexCharts from 'apexcharts';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TimeType } from '/src/types/report';

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

const TimeChart = ({timeValue}:{timeValue?: TimeType}) => {
  const chartRef = useRef(null);
  const requestData = timeValue?.callingPerTimeList
  console.log(timeValue)

  const MaxData = requestData?  Math.ceil(Math.max(...requestData)/10) * 10 + 10 : 0;
  
  useEffect(() => {
    const options = {
      // 데이터
      series: [
        {
        name: '요청 수',
        data: requestData
        }, 
      ],
      
      // 차트
      chart: {
        height: "96%",
        type: 'bar',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
      },

      // x축
      xaxis: {
        categories: [
          '00:00 ~ 02:00', '02:00 ~ 04:00', '04:00 ~ 06:00', '06:00 ~ 08:00',
          '08:00 ~ 10:00', '10:00 ~ 12:00', '12:00 ~ 14:00', '14:00 ~ 16:00',
          '16:00 ~ 18:00', '18:00 ~ 20:00', '20:00 ~ 22:00', '22:00 ~ 24:00'
        ],
        labels: {
          rotate: -55,
          style: {
            fontSize: '10px'
          }
        },
      },

      // y축
      yaxis: {
        min: 0,
        max: MaxData,
        tickAmount: 5,
      },

      // 데이터 레이블
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },

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
        <Title>시간대별 요청현황</Title>
      </ChartHeader>
      <Chart ref={chartRef} />
    </Container>
  );
};

export default TimeChart;
