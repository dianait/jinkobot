/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import ROSLIB from 'roslib';
import { ITopic } from 'services/topics';
interface IAction {
  goal: { nameGoal: string; valueGoal: string };
  feedback: string;
  result: string;
}
export default class RosService {
  ros: ROSLIB.Ros;
  url = '192.168.1.91';
  port: '9090';
  connected = false;
  loading = false;
  service_busy = false;

  connect(): void {
    this.url = 'localhost' + ':' + this.port;
    this.ros = new ROSLIB.Ros({
      url: 'ws://192.168.1.91:9090',
    });

    this.ros.on('connection', () => {
      this.connected = true;
      this.loading = false;
      console.log('Connection to ROSBridge established!');
    });
    this.ros.on('error', (error) => {
      console.log(new Date().toTimeString() + ` - Error: ${error}`);
    });
    this.ros.on('close', () => {
      console.log(new Date().toTimeString() + ' - Disconnected!');
      this.connected = false;
      this.loading = false;
    });
  }

  public isConnected(): boolean {
    return this.connected;
  }

  public getUrl(): string {
    return this.url;
  }

  /***************************************************************************************
    callService()
    @author Diana Hernández
    @description Función genérica para comunicarse con ros mediante Servicios
    @params nameService: Servicio que será llamado
    @params typeMessage: Tipo de mensaje que necesita el servicio (1º parámetro)
    @params data: información que se quiere pasar a ros
    @params callback: Función para manejar la respuesta del servicio
    @date 23/04/2020
    ****************************************************************************************/

  callService(
    nameSerivce: string,
    typeMessage: string,
    data: any,
    callback: any
  ): void {
    console.log('Calling service: ' + nameSerivce);
    const service = new ROSLIB.Service({
      ros: this.ros,
      name: nameSerivce,
      serviceType: typeMessage,
    });

    const request = new ROSLIB.ServiceRequest(data);

    service.callService(
      request,
      (result: string) => {
        this.service_busy = false;
        if (result !== '') {
          callback(result);
        }
      },
      (error: any) => {
        this.service_busy = false;
        console.error(error);
      }
    );
  }

  /***************************************************************************************
    publishTopic()
    @author Diana Hernández
    @description Función genérica para publicar en un topic
    @params topicName: nombre del topic en que se quiere publicar.
    @params typeMessage: typo de mensaje que requiere el Topic.
    @params data?: información que se quiere publicar
    @date 23/04/2020
    ****************************************************************************************/
  public publishTopic(topicName: string, typeMessage: string, data = {}): void {
    const topic = new ROSLIB.Topic({
      ros: this.ros,
      name: topicName,
      messageType: typeMessage,
    });

    topic.publish(new ROSLIB.Message(data));
  }

  public disconnect(): void {
    if (this.connected) {
      this.ros.close();
    }
  }

  /***************************************************************************************
    suscribeToTopic()
    @description Función genérica para se suscribe a un topic
    @params ITopic: Objeto con el nombre del tópico y el tipo de mensaje
    @date 03/02/2022
    ****************************************************************************************/
  public subscribeToTopic(
    topicToSubscribe: ITopic,
    callback = (mensajeRecibido): void => {
      console.log(mensajeRecibido);
    }
  ): void {
    const ros = new ROSLIB.Ros({
      url: 'ws://192.168.1.91:9090',
    });

    const topic = new ROSLIB.Topic({
      ros: ros,
      name: topicToSubscribe.topicName,
      messageType: topicToSubscribe.messageType,
    });

    topic.subscribe((mensajeRecibido) => {
      callback(mensajeRecibido);
      topic.unsubscribe();
    });
  }

  /***************************************************************************************
    callAction()
    @description Función genérica para se llamar a una accion
    @params serverName: Nombre del servicio => Lo que has puesto como primer parametro en ROS
    server = actionlib.SimpleActionServer('start', actionTemplateAction, callback, False)
    "/start" en este caso
    @params actionName: Nombre de la accion => El nombre del archivo .action acabado en Action
    @params data: { goal: { nameGoal: string, valueGoal: string}, feedback: string, result: string}
    @date 13/02/2022
    ****************************************************************************************/

  public callAction(serverName, actionName, data): void {
    const ros = new ROSLIB.Ros({
      url: 'ws://192.168.1.91:9090',
    });

    const action = new ROSLIB.ActionClient({
      ros: ros,
      serverName: serverName,
      actionName: actionName,
      timeout: 10000,
    });

    const goalData = {};

    // name goal
    const nameGoal = data.goal[0].nameGoal;
    const goalValue = data.goal[0].valueGoal;
    goalData[nameGoal] = goalValue;

    // number of questions goal
    const nameGoal2 = data.goal[1].nameGoal;
    const goalValue2 = data.goal[1].valueGoal;
    goalData[nameGoal2] = goalValue2;

    const message = new ROSLIB.Message(goalData);

    console.log('Goal =', message);

    const goal = new ROSLIB.Goal({
      actionClient: action,
      goalMessage: message,
    });

    goal.on('feedback', function (feedback) {
      console.log('Feedback: ' + feedback.currentTime.toString());
    });
    goal.on('result', function (result) {
      console.log('Final Result: ' + result.success.toString());
    });

    goal.send();
  }
}

interface IGoal {
  nameGoal: string;
  valueGoal: string;
}
interface IAction {
  goals: IGoal[];
  feedback: string;
  result: string;
}
