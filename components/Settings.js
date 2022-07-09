/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import Button from 'components/Button';
import useRobot from './../Hooks/useRobot';
import router, { useRouter } from 'next/router';

function Settings({ name }) {
  // const [robot, ROS] = useRobot();
  const router = useRouter();
  // const start = (e) => {
  //   e.preventDefault();
  //   const numberQuestions = e.target.questionsNumber.value;
  //   const difficulty = e.target.difficulty.value;
  //   console.log(`Start rutine with ${name}`);
  //   console.log(`EMOTION: ${numberQuestions} questions`);
  //   console.log(`ORIENTATION: ${difficulty}`);
  //   callAction(name, numberQuestions, difficulty);
  //   router.push(`/pacientes/${name}`);
  // };

  // const callAction = (name, numberQuestions, difficulty) => {
  //   ROS.connect();
  //   const serverName = '/jinkoAction';
  //   const actionName = 'actionTemplateAction';
  //   const data = {
  //     goal: [
  //       { nameGoal: 'name', valueGoal: name },
  //       { nameGoal: 'questions', valueGoal: parseInt(numberQuestions) },
  //     ],
  //     feddback: 'currentTime',
  //     result: 'success',
  //   };
  //   ROS.callAction(serverName, actionName, data);
  // };

  const start = (e) => {
    e.preventDefault();
    router.push(`/pacientes/Amelia`);
  };

  return (
    <main>
      <h3>Ejercicios para {name}</h3>
      <form onSubmit={start}>
        <h2>EMOCIONES</h2>
        <div>
          <label htmlFor="questionsNumber">Número de preguntas </label>
          <input name="questionsNumber" type="number" max={5} min={1} />
        </div>
        <h2>ORIENTACIÓN</h2>
        <div>
          <label htmlFor="difficulty">Dificultad</label>
          <select name="difficulty">
            <option data-id="1">facil</option>
            <option data-id="2">intermedio</option>
          </select>
        </div>
        <Button
          type="submit"
          width="20vh"
          text="Start"
          backgroundColor="#ff8008"
          color="white"
        />
      </form>
      <style jsx>{`
        form {
          border: 3px solid gray;
          border-radius: 10px;
          font-size: 1.2rem;
        }
        main,
        form {
          width: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        label,
        input,
        button,
        h3 {
          margin: 1rem;
          padding: 0;
        }

        input {
          width: 3rem;
          text-align: right;
        }
        select {
          text-align: center;
        }
        input,
        select {
          height: 30px;
          border: none;
          border: 3px solid #ccc;
        }

        button {
          width: 100px;
          height: 30px;
          margin: 2rem;
        }
      `}</style>
    </main>
  );
}

export default Settings;
