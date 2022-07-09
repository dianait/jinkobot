/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { IPatientInfo, IListPatientInfo } from 'models/interfaces/IPatientInfo';
import Row from 'components/Row';

const ListOfCards: React.FC<IListPatientInfo> = ({
  listOfPatients,
}: IListPatientInfo) => {
  return (
    <>
      <table>
        <thead>
          <h2>Lista de Pacientes</h2>
          <tr>
            <td>NOMBRE</td>
            <td>STATUS</td>
            <td>Nº SESIONES</td>
            <td colSpan={2}>ACCIONES</td>
          </tr>
        </thead>
        <tbody>
          {listOfPatients.map((p: IPatientInfo) => {
            return (
              <Row
                key={p.id}
                id={p.id}
                name={p.name}
                isActive={p.isActive}
                sessionCount={p.sessionCount}
              />
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        td {
          text-align: center;
          height: 3rem;
          border: 2px solid lightgray;
        }
        table {
          width: 50%;
          margin: 2rem auto;
          font-size: 1.2rem;
          padding-bottom: 1.2rem;
          border-collapse: collapse;
        }
      `}</style>
    </>
  );
};

export default ListOfCards;
