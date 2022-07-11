export interface IPatientInfo {
  id?: string;
  name?: string;
  isActive?: boolean;
  sessionCount?: number;
  rutines?: [];
  chartRutinesData?: { latence: []; time: []; results: [] };
  chartEmotionData?: { latence: []; time: []; results: [] };
  emotion?: [];
  notes?: [];
}

export interface IListPatientInfo {
  listOfPatients: Array<IPatientInfo>;
}

export interface dataChart {
  name?: string;
  data: [];
  label?: string;
  stepSize?: Number;
  max?: Number;
  min?: Number;
}

export interface IQuestion {
  answer: string;
  id?: number;
  question: string;
  src: string;
  type: string;
  isSelected?: boolean;
}

export interface IUserCard {
  name: string;
}

export let notes = [
  {
    date: '📅 23/06/2022',
    text:
      "- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    date: '📅 01/07/2022',
    text:
      "- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    date: '📅 03/07/2022',
    text:
      "- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
];
