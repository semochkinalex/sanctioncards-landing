import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SelectLanguage from '../components/select-language/select-language'

import { WelcomingComponent } from '../components/welcoming-component/welcoming-component';
import { Benefits } from '../components/benefits/benefits';
import Article from '../components/article/article';
import { Button, Text } from '@mantine/core';

import styles from './index.module.css';

const x = [
  {
    "image": "auditors",
    "title": "Pharmacists",
    "description": "Azurill can be seen bouncing and playing on its big, rubbery tail"
  },
  {
    "image": "lawyers",
    "title": "Lawyers",
    "description": "Fans obsess over the particular length and angle of its arms"
  },
  {
    "image": "accountants",
    "title": "Bank owners",
    "description": "They divvy up their prey evenly among the members of their pack"
  },
  {
    "image": "others",
    "title": "Others",
    "description": "Phanpy uses its long nose to shower itself"
  }
];

const Home: NextPage = () => {
  return (
    <>
      <WelcomingComponent />
      <Benefits supTitle={'Benefits'} description={"Unlock the full power of online shopping using SanctionCards."} />
      <Article textPosition='right' variant="light" title={'Load'} image={'https://www.usunlocked.com/wp-content/uploads/2020/11/Create_a_Card_Graphic.svg'}>
        <Text className={styles.paragraph} color="gray" weight={600}>
             Load your US Unlocked Account and pay the one time activation fee to get started.
        </Text>
        <Text className={styles.paragraph} color="gray" weight={600}>
            Our US Unlocked Payment Cards will be available for use once the first account load clears.
        </Text>
        <Button>Load A Card Now</Button>
      </Article>
      <Article variant='white' title={'Load'} image={'https://www.usunlocked.com/wp-content/uploads/2020/11/Load-Graphic.svg'}>
        <Text className={styles.paragraph} color="gray" weight={600}>
             Load your US Unlocked Account and pay the one time activation fee to get started.
        </Text>
        <Text className={styles.paragraph} color="gray" weight={600}>
            Our US Unlocked Payment Cards will be available for use once the first account load clears.
        </Text>
        <Button>Load A Card Now</Button>
      </Article>
      <Article textPosition='right' variant="light" title={'Load'} image={'https://www.usunlocked.com/wp-content/uploads/2020/11/Create_a_Card_Graphic.svg'}>
        <Text className={styles.paragraph} color="gray" weight={600}>
             Load your US Unlocked Account and pay the one time activation fee to get started.
        </Text>
        <Text className={styles.paragraph} color="gray" weight={600}>
            Our US Unlocked Payment Cards will be available for use once the first account load clears.
        </Text>
        <Button>Load A Card Now</Button>
      </Article>
    </>
  )
}

export default Home
