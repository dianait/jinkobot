import { NextPage } from 'next';
import { User } from 'models/user';
import styled from 'styled-components';
import { signIn } from 'firebase/client';
import Container from 'components/Container';
import { LoginForm } from 'models/loginForm';
import CustomForm from 'components/CustomForm';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const router = useRouter();
  const handleLogin = async (event: any): Promise<any> => {
    const user: User = {
      email: event.target.user.value,
      password: event.target.password.value,
    };
    return signIn(user).then(() => {
      router.push('/pacientes');
    });
  };

  return (
    <Container width="100%">
      <CustomForm props={LoginForm} handle={handleLogin} />
    </Container>
  );
};

export default Login;

export const ImageStyled = styled.img`
  width: 3rem;
  margin: 0.4rem;
`;
