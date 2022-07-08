import { Menu, Button, Text } from '@mantine/core';
import Image from 'next/image';

import styles from './select-language.module.css';

import { useRouter } from 'next/router';
import { languages } from '../../utils/languages';
import Link from 'next/link';
import { useCallback } from 'react';

const SelectLanguage = () => {

    const router = useRouter();

    const handleSelectLanguage = useCallback((language: 'ru' | 'en') => {
        localStorage.setItem("language", language);
        router.push(router.pathname, router.pathname, {locale: language});
    }, [router])

    return (
      <Menu size="xs" withArrow control={
        <Button variant="subtle" className={styles.button} color="dark"><Image src={`/${router.locale}.svg`} width="30" height="30" /></Button>
      }>
        {
            // @ts-ignore
            Object.keys(languages).map((language: 'en' | 'ru', i) => {
                return <Menu.Item onClick={() => handleSelectLanguage(language)} key={language} icon={<Image src={languages[language].image} width="20" height="20" />}><Text component='a' size="sm" weight={router?.locale === language ? 500 : 400}>{languages[language].name}</Text></Menu.Item>
            })
        }
      </Menu>
    )
};
    
export default SelectLanguage;
