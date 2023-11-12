import ApexCharts from 'apexcharts';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AgreeRequestData } from '/src/types/chart';

// 스타일 컴포넌트 정의
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

const SelectYear = styled.select`
  font-size: 1.6vh;
  border: 1px solid #ccc;
  border-radius: 0.5vh;
  background-color: white;
  height: 120%;
  padding: 0.1% 0.3%;
  z-index: 1000;
  cursor: pointer;
`;

const Chart = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
`;

const AgreeChart = () => {
  const chartRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState<string>('2023');

  const requestData: AgreeRequestData = {
    '2017': {
      totalRequests:[280, 290, 330, 360, 320, 320, 330, 290, 330, 360, 320, 320],
      acceptedRequests:[120, 110, 140, 108, 107, 130, 130, 120, 110, 140, 180, 170]
    },
    '2023': {
      totalRequests: [280, 290, 330, 360, 320, 320, 330, 290, 330, 360, 320, 320],
      acceptedRequests: [280, 290, 330, 360, 320, 320, 330, 290, 330, 360, 320, 320]
    },
    '2020': {
      totalRequests:[120, 110, 140, 108, 107, 130, 130, 120, 110, 140, 180, 170],
      acceptedRequests:[280, 290, 330, 360, 320, 320, 330, 290, 330, 360, 320, 320]
    },
  };

  useEffect(() => {
    const acceptanceRates = requestData[selectedYear].acceptedRequests.map((accepted, index) => {
      const total = requestData[selectedYear].totalRequests[index];
      return total > 0 ? ((accepted / total) * 100).toFixed(2) : null;
    });

    const options = {
      // 데이터
      series: [
        {
          name:  `전체 요청수`,
          data:  requestData[selectedYear].totalRequests,
          type: 'line',
        },
        {
          name: `승낙 요청수`,
          data:  requestData[selectedYear].acceptedRequests,
          type: 'line',
        },
        {
          name: `승낙률`,
          data: acceptanceRates,
          type: 'none',
        },
      ],
      
      // 차트
      chart: {
        height: "86%",
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
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
          '01월', '02월', '03월', '04월',
          '05월', '06월', '07월', '08월',
          '09월', '10월', '11월', '12월'
        ],
      },

      // y축
      yaxis: {
        labels: {
          formatter: function (val:string) {
            return parseInt(val);
          },
        },
        min: 0,
        max: 400,
        tickAmount: 4,
      },

      // 데이터 레이블  
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '11px',
        },
      },

      // 범례
      legend: {
        floating: true,
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -12,
        fontSize: '12%',
        fontWeight : 800,
        markers: {
          width: '9%',
          height: '9%',
        },
      },
      
      // line 컬러
      colors: ['#545454', '#77B6EA', '#FFF101'],

      // line 유형
      stroke: {
        curve: 'smooth'
      },
      
      // 차트 뒤 선
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.8
        },
      },


      // 호버 시 데이터표
      tooltip: {
        y: {
          formatter: function (value: string, { seriesIndex}: { seriesIndex: number }) {
            if (seriesIndex === 2) {
              return parseFloat(value).toFixed(2) + "%";
            }
            return parseInt(value);
          }
        }
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [selectedYear]);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  return (
    <Container>
      <ChartHeader>
        <Title>월별 요청 승낙 현황</Title>
        <SelectYear  onChange={handleYearChange} value={selectedYear}>
          <option value="2017">2017년</option>
          <option value="2018">2018년</option>
          <option value="2019">2019년</option>
          <option value="2020">2020년</option>
          <option value="2021">2021년</option>
          <option value="2022">2022년</option>
          <option value="2023">2023년</option>
        </SelectYear>
      </ChartHeader>
      <Chart ref={chartRef}></Chart>
    </Container>
  );
};

export default AgreeChart;
