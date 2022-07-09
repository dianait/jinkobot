/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { NextPage } from 'next';
import Login from 'components/form';
import { useRouter } from 'next/router';
import useUser from 'Hooks/useUser';

const LoginPage: NextPage = () => {
  const user = useUser();
  const router = useRouter();
  useEffect(() => {
    user && router.replace('/pacientes');
  }, [user]);

  return <Login />;
};

export default LoginPage;
