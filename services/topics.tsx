export interface ITopic {
  topicName: string;
  messageType: string;
}

interface ITopics {
  sensorState: ITopic;
  firmware: ITopic;
  battery: ITopic;
  vel: ITopic;
}

export interface IBattery {
  level: number;
  charging: boolean;
}

export interface IRobot {
  firmware: string;
  battery: IBattery;
  connected?: boolean;
  text?: string;
}

const sensorState: ITopic = {
  topicName: '/sensor_state',
  messageType: 'turtlebot3_msgs/SensorState',
};

const firmware: ITopic = {
  topicName: '/firmware_version',
  messageType: 'turtlebot3_msgs/VersionInfo',
};

const battery: ITopic = {
  topicName: '/battery_state',
  messageType: 'sensor_msgs/BatteryState',
};

const vel: ITopic = {
  topicName: '/cmd_vel',
  messageType: 'geometry_msgs/Twist',
};

export const topics: ITopics = {
  sensorState: sensorState,
  firmware: firmware,
  battery: battery,
  vel: vel,
};
