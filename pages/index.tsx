import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SelectLanguage from '../components/select-language/select-language'

import { WelcomingComponent } from '../components/welcoming-component/welcoming-component';
import { Benefits } from '../components/benefits/benefits';
import Article from '../components/article/article';
import { Button, Text } from '@mantine/core';

import styles from './index.module.css';
import TeamMembers from '../components/team-members/team-members';

const Home: NextPage = () => {
  return (
    <>
      <WelcomingComponent />
      <Benefits supTitle={'Benefits'} description={"Unlock the full power of online shopping using SanctionCards."} />
      <TeamMembers />
    </>
  )
}

export default Home

{/* <Article textPosition='right' variant="light" title={'Load'} image={'https://www.usunlocked.com/wp-content/uploads/2020/11/Create_a_Card_Graphic.svg'}>
  <Text className={styles.paragraph} color="gray" weight={600}>
       Load your US Unlocked Account and pay the one time activation fee to get started.
  </Text>
  <Text className={styles.paragraph} color="gray" weight={600}>
      Our US Unlocked Payment Cards will be available for use once the first account load clears.
  </Text>
  <Button>Load A Card Now</Button>
</Article> */}