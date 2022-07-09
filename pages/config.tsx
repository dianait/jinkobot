/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextPage } from 'next';
import { ContainerRobot } from './styles';
import Info from 'components/Info';

const Config: NextPage = () => {
  return (
    <ContainerRobot>
      <h1>JINKOBOT</h1>
      <Info />
      <style jsx>{`
        h1 {
          font-size: 9rem;
          text-align: center;
          margin-top: -8rem;
          margin-bottom: 1rem;
          background: -webkit-linear-gradient(#ff8008, #ffc837);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }
      `}</style>
    </ContainerRobot>
  );
};

export default Config;
