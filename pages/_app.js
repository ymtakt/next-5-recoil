import '../styles/globals.css'
import { RecoilRoot } from "recoil"


import CSR from '../components/CSR';
// import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <CSR>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </CSR>
  );
}

export default MyApp
