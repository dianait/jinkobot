import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useUser from 'Hooks/useUser';
import { signOut } from 'firebase/client';

const LogOutPage: NextPage = () => {
  const user = useUser();
  const router = useRouter();
  useEffect(() => {
    signOut();
    router.push('/');
  }, []);

  return <></>;
};

export default LogOutPage;
