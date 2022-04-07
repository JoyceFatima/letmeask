import { Globals } from '../styles/globals';
import type { AppProps } from 'next/app';
import Home from './index';

import '../services/firebase';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>hello</h1>
      <Home />
    </>
  );
}

export default MyApp;
