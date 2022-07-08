import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SelectLanguage from '../components/select-language/select-language'

const Home: NextPage = () => {
  return (
    <>
      <SelectLanguage />
    </>
  )
}

export default Home
