import '../normalize.css'
import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  // auto-detect language
  useEffect(() => {
    const initialLanguage = localStorage.getItem("language");
    if (initialLanguage) router.push(router.pathname, router.pathname, {locale: initialLanguage});
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
