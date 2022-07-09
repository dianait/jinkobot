/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Camera, Container } from './style';
import RosService from '../../services/ros';
import { topics } from '../../services/topics';
const ROS = new RosService();

const Info: React.FC = () => {
  const [connection, setConnection] = useState(false);
  const [battery, setBattery] = useState({ level: 0, charging: false });
  const [firmware, setFirmware] = useState('');

  function connect(): void {
    console.log('Conectado con ROS Brdige...');
    if (!connection) {
      // OS.connect();
      // getData();
      // ROS.publishTopic('sound', 'turtlebot3_msgs/Sound', 1);
      setTimeout(() => {
        setConnection(true);
        setFirmware('1.1.1');
        setBattery({ level: 0.6, charging: false });
      }, 2500);
    }
  }

  const disconnect = () => {
    setConnection(false);
    setFirmware('');
    setBattery({ level: 0, charging: false });
    // ROS.disconnect();
  };

  const normalize = (rawNumber: number): number => {
    return rawNumber > 1 ? 1 : parseFloat(rawNumber.toFixed(1));
  };

  function getData(): void {
    ROS.subscribeToTopic(topics.battery, SetBatteryCallback);
    ROS.subscribeToTopic(topics.firmware, setFirmwareCallback);
  }

  const SetBatteryCallback = (result): void => {
    const batteryNorm = normalize(result.percentage);
    const isBatteryPlug = result.present;
    setBattery({ level: batteryNorm, charging: !isBatteryPlug });
  };

  const setFirmwareCallback = (result): void => {
    console.log('firmware', result.firmware);
    setFirmware(result.firmware);
  };

  return (
    <>
      <Container>
        <>
          <main>
            {connection ? (
              <h5 style={{ background: 'green' }}>CONTECTADO</h5>
            ) : (
              <h5 style={{ background: 'red' }}>DESCONECTADO</h5>
            )}
            <div>💻 firmware: {firmware}</div>
            <div>🔋 Battery: {battery.level * 100 + `%`}</div>
            {battery.charging && <div>🔌 Cargando</div>}
          </main>
          {connection ? (
            <button onClick={disconnect}>Desconectar</button>
          ) : (
            <button onClick={connect}>CONECTAR</button>
          )}
        </>
      </Container>
      <Camera>
        <img src="../img/burguer.png" alt="turtlebot" />
      </Camera>
      <style jsx>{`
        main {
          width: 80vh;
          border-top: 2px solid #f9b62c;
          border-bottom: 2px solid #ff8008;
          padding: 0;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          align-content: center;
        }
        h5 {
          font-weight: bold;
          padding: 0.7rem;
          border: 1px solid black;
          border-radius: 5px;
          text-align: center;
          background: green;
          color: white;
        }
        h2 {
          margin-bottom: 0;
        }
        article {
          width: 190px;
          height: 90px;
        }
        button {
          margin-top: 2rem;
          color: white;
          width: 20vh;
          margin-left: 1rem;
          height: 3rem;
          background: #ff8008;
          border: none;
          border-bottom: 1px solid lightgray;
          border-right: 1px solid lightgray;
          outline: none;
          border-radius: 30px;
          font-size: 1.4rem;
          cursor: pointer;
        }
        button:hover {
          box-shadow: 1px 1px 10px 1px lightgray;
        }
      `}</style>
    </>
  );
};

export default Info;
