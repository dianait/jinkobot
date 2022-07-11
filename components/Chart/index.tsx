import React from 'react';
import { Line } from 'react-chartjs-2';
import { dataChart } from 'models/interfaces/IPatientInfo';

const Chart: React.FC<dataChart> = ({
  data,
  label,
  min,
  max,
  stepSize,
}: dataChart) => {
  const options = {
    maintainAspectRatio: true,
    scales: {
      x: {
        ticks: {
          font: {
            size: 18,
          },
        },
        title: {
          display: true,
          text: 'Fecha de la sesión',
          font: {
            size: 22,
            weight: 'bold',
          },
        },
      },
      y: {
        suggestedMin: min,
        suggestedMax: max,
        ticks: {
          // forces step size to be 50 units
          stepSize: stepSize,
        },
        title: {
          display: true,
          text: label,
          font: {
            size: 22,
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 24,
          },
        },
      },
    },
  };

  return <Line data={data} width={200} height={100} options={options} />;
};

export default React.memo(Chart);
