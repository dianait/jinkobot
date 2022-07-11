/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IPatientInfo } from 'models/interfaces/IPatientInfo';
import Chart from 'components/Chart';
import { Container } from './style';
import TextArea from 'components/TextArea';

const ListOfCharts: React.FC<IPatientInfo> = ({
  chartEmotionData,
  name,
  notes,
}: IPatientInfo) => {
  return (
    <>
      <Container>
        <div>
          <Chart
            data={chartEmotionData.results}
            label="Aciertos"
            min={1}
            max={3}
            stepSize={1}
          />
          <Chart
            data={chartEmotionData.time}
            label="Segundos"
            min={0}
            max={15}
            stepSize={3}
          />
        </div>
        <TextArea notes={notes} />
      </Container>
    </>
  );
};

export default ListOfCharts;
