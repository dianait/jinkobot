/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from 'react';
import RosService from '../services/ros';
import { topics } from '../services/topics';
import { IRobot } from '../services/topics';

const ROS = new RosService();

const normalize = (rawNumber: number): number => {
  return rawNumber > 1 ? 1 : parseFloat(rawNumber.toFixed(1));
};

export default function useRobot(): [IRobot, any] {
  const [connection, setConnection] = useState(false);
  console.log('at the beginning...', connection);
  const [battery, setBattery] = useState({ level: 0, charging: false });
  const [firmware, setFirmware] = useState('');

  useEffect(() => {
    connect();
  }, []);

  function connect(): void {
    console.log('Conectado con ROS Brdige...');
    if (!connection) {
      ROS.connect();
      ROS.publishTopic('sound', 'turtlebot3_msgs/Sound', 1);
      setConnection(ROS.connected);
      getData();
    }
  }

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

  const robot: IRobot = {
    firmware: firmware,
    battery: battery,
    connected: connection,
    text: 'CONTECTADO',
  };

  return [robot, ROS];
}
