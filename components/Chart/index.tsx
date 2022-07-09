import React from 'react';
import { Line } from 'react-chartjs-2';
import { dataChart } from 'models/interfaces/IPatientInfo';

const Chart: React.FC<dataChart> = ({ data }: dataChart) => {
  return <Line data={data} width={200} height={100} options={options} />;
};

export default React.memo(Chart);

const options = {
  maintainAspectRatio: true,
  plugins: {
    legend: {
      labels: {
        font: {
          size: 20,
        },
      },
    },
  },
};
