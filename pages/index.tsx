import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SelectLanguage from '../components/select-language/select-language'

import { Header } from '../components/header/header';

const x = [
  {
    "link": "/about",
    "label": "Features"
  },
]

const Home: NextPage = () => {
  return (
    <>
      <Header links={x} />
      {/* <SelectLanguage /> */}
    </>
  )
}

export default Home
