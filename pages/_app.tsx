import '../normalize.css'
import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  // auto-detect language
  useEffect(() => {
    const initialLanguage = localStorage.getItem("language");
    if (initialLanguage) router.push(router.pathname, router.pathname, {locale: initialLanguage});
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
