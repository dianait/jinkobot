/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { AppProps } from 'next/app';
import 'styles/globalStyles.css';
import Head from 'next/head';
import Menu from 'components/sidebar';
import { Container } from './styles';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Jinkobot</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <Menu items={['PACIENTES', 'CONFIG']} />
      <Component {...pageProps} />
    </Container>
  </>
);

export default MyApp;
