import { Globals } from '../styles/globals';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Globals />
      <h1>hello</h1>
    </>
  );
}

export default MyApp;
