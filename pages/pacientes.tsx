import { NextPage } from 'next';
import useUser from 'Hooks/useUser';
import { useState, useEffect } from 'react';
import ListOfCards from 'components/ListOfCards';
import { getAllPatients } from 'firebase/client';

const Home: NextPage = () => {
  const [patients, setPatients] = useState([]);
  const user = useUser();

  useEffect(() => {
    getAllPatients().then(setPatients);
  }, []);

  return <ListOfCards listOfPatients={patients} />;
};
export default Home;
