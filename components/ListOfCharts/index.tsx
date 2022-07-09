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
          <Chart data={chartEmotionData.results} />
          <Chart data={chartEmotionData.time} />
        </div>
        <TextArea notes={notes} />
      </Container>
    </>
  );
};

export default ListOfCharts;
