/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextPage } from 'next';
import { ContainerListOfCharts, Wrapper } from './style';
import ListOfCharts from 'components/ListOfCharts';
import { IPatientInfo } from 'models/interfaces/IPatientInfo';
import { useRouter } from 'next/router';

const PatientPage: NextPage<IPatientInfo> = ({
  name,
  notes,
  chartEmotionData,
  chartRutinesData,
}: IPatientInfo) => {
  const router = useRouter();
  const p = router.query.id as string;
  const patient = p.replace('_', ' ');
  return (
    <Wrapper>
      <p style={{ paddingLeft: '8rem', fontSize: '2rem' }}>{patient}</p>
      <ContainerListOfCharts>
        <ListOfCharts
          chartEmotionData={chartEmotionData}
          chartRutinesData={chartRutinesData}
          name={name}
          notes={notes}
        />
      </ContainerListOfCharts>
      <style jsx>{`
        p {
          font-size: 1.5rem;
        }
      `}</style>
    </Wrapper>
  );
};

// DATA FETCHING
// Si entras directo se ejecuta en el servidor
// Si entras mediante navegacion se ejecuta en el cliente
//Asíncrono
PatientPage.getInitialProps = (ctx) => {
  const { query, res } = ctx;
  const name = query.id as string;
  return fetch(`http://localhost:3000/api/patients/${name}`).then(
    (apiresponse) => {
      if (apiresponse.ok) return apiresponse.json();
      if (res) {
        res.writeHead(301, { Location: '/pacientes' }).end();
      }
    }
  );
};

export default PatientPage;
