import { firestore } from 'firebase/admin';

export default (request, response) => {
  const { query } = request;
  const name = query.id;
  const parsedName = name.replace('_', ' ');

  firestore
    .collection('patients')
    .doc(parsedName)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      const { rutines, emotion } = data;
      const rutinesParsed = parseChartData(rutines);
      const emotionParsed = parseChartData(emotion);
      const chartRutinesData = getAllDataChartInfo(rutinesParsed);
      const chartEmotionData = getAllDataChartInfo(emotionParsed);
      response.json({
        ...data,
        id,
        chartRutinesData,
        chartEmotionData,
      });
    })
    .catch(() => {
      response.status(404).end();
    });
};

const getAllDataChartInfo = (dataParsed) => {
  const { dates, latence, time, results } = dataParsed;
  const latenceInfo = getDataChartInfo(dates, 'Latencia', latence);
  const responseTimeInfo = getDataChartInfo(dates, 'Tiempo de respuesta', time);
  const resultInfo = getDataChartInfo(dates, 'Resultados', results);
  return { latence: latenceInfo, time: responseTimeInfo, results: resultInfo };
};

const getDataChartInfo = (labels, title, data) => {
  const backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ];

  const borderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  return {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 4,
      },
    ],
  };
};
const parseChartData = (data) => {
  const arrayTime = [];
  const arrayDates = [];
  const arrayLatence = [];
  const arrayResults = [];

  data.map((routine) => {
    arrayTime.push(routine.totalTime / 6000); // TODO: Change DB info to minutes
    const date = new Date(routine.date);
    arrayLatence.push(routine.latence);
    arrayResults.push(routine.ok.split('/')[0]);
    const dateString = date.getDate() + '/' + (date.getMonth() + 1); // + '/' + date.getFullYear()
    arrayDates.push(dateString);
  });
  // eliminate NaN and undefined items in arrayTime
  const arrayTimeClean = arrayTime.filter(function (item) {
    return item !== undefined && item !== null && !isNaN(item);
  });

  //truncate decimals number in arrayTimeClean
  const arrayTimeCleanTruncated = arrayTimeClean.map(function (item) {
    return item.toFixed(2);
  });

  return {
    dates: arrayDates,
    results: arrayResults,
    time: arrayTimeCleanTruncated,
  };
};
