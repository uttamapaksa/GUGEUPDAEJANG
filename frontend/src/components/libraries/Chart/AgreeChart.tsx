import ApexCharts from 'apexcharts';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const ChartContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`;

const SelectYear = styled.select`
  position: absolute;
  font-size: 1.6vh;
  border: 1px solid #ccc;
  border-radius: 0.6vh;
  background-color: white;
  margin-right: 2.8vh;
  padding: 0.2vh 0.3vh;
  top: 1vh;
  z-index: 1000;
  cursor: pointer;
`;

const Chart = styled.div`
  /* border: 1px solid red; */
  width: 98%;
`;

const AgreeChart = () => {
  const chartRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState('2023');

  const requestData = {
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
      return total > 0 ? parseFloat((accepted / total) * 100).toFixed(2) : null;
    });

    const options = {
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
      chart: {
        height: "96%",
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
      colors: ['#545454', '#77B6EA'],
      dataLabels: {
        enabled: true,
      },
      title: {
        text: `${selectedYear}년 월별 승낙 통계`,
        align: 'left',
        style: {
          fontSize: '12px',
        }
      },
      stroke: {
        curve: 'smooth'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.8
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
        style: {
          fontSize: '1px', // 여기에서 폰트 사이즈를 조정할 수 있습니다
        }
      },
      yaxis: {
        title: {
          text: 'call'
        },
        labels: {
          formatter: function (val:any) {
            return parseInt(val); // y축 레이블을 정수로 변환
          },
        },
        min: 0,
        max: 400,
        tickAmount: 4,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
      tooltip: {
        y: {
          formatter: function (value, { seriesIndex, dataPointIndex, w }) {
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

  const handleYearChange = (event:any) => {
    setSelectedYear(event.target.value);
  };

  return (
    <ChartContainer>
      <SelectYear  onChange={handleYearChange} value={selectedYear}>
        <option value="2017">2017년</option>
        <option value="2018">2018년</option>
        <option value="2019">2019년</option>
        <option value="2020">2020년</option>
        <option value="2021">2021년</option>
        <option value="2022">2022년</option>
        <option value="2023">2023년</option>
      </SelectYear>
      <Chart ref={chartRef}></Chart>
    </ChartContainer>
  );
};

export default AgreeChart;
