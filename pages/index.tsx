import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SelectLanguage from '../components/select-language/select-language'

import { Header } from '../components/header/header';
import { WelcomingComponent } from '../components/welcoming-component/welcoming-component';

const Home: NextPage = () => {
  return (
    <>
      <WelcomingComponent />
    </>
  )
}

export default Home
