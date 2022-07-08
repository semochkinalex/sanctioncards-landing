import React from 'react';
import {
  createStyles,
  Menu,
  Center,
  Header as HeaderActive,
  Container,
  Group,
  Button,
  Burger,
  Text,
  MediaQuery,
  Collapse,
  Stack,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import Link from 'next/link';

import styles from './header.module.css';
import SelectLanguage from '../select-language/select-language';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    transition: 'all .2s ease-in-out',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: '#228be6',
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface IHeader {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function Header({ links }: IHeader) {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);

  return (
    <HeaderActive height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger opened={opened} onClick={() => toggleOpened()} className={classes.burger} size="sm" />
          <Text variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} size="xl" weight={700}>SanctionCards</Text>
        </Group>
        <Group spacing={5} className={classes.links}>
          <Link href="/faq"><a className={classes.link}>Home</a></Link>
          <Link href="/how-it-works"><a className={classes.link}>How it Works</a></Link>
          <Link href="/pricing"><a className={classes.link}>Pricing</a></Link>
          <Link href="/faq"><a className={classes.link}>FAQ</a></Link>
        </Group>
        <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
          <Group spacing={10}>
            <Button target="_blank" component="a" href="https://sanctionscard.web.app/sign-in" variant='light'>
              Sign In
            </Button>
            <Button target="_blank" component="a" href="https://sanctionscard.web.app/sign-in">
              Get Cards
            </Button>
            <SelectLanguage />
          </Group>
        </MediaQuery>
        <MediaQuery largerThan="xs" styles={{display: 'none'}}>
            <Group>
              <Button target="_blank" component="a" href="https://sanctionscard.web.app/sign-in" variant='light'>
                Sign In
              </Button>
              <SelectLanguage />
            </Group>
        </MediaQuery>
      </Container>
      <Collapse in={opened}>
        <Stack spacing={8} className={styles.stack}>
          <Link href="/faq"><Text component="a" className={`${classes.link} ${styles.link}`}>Home</Text></Link>
          <Link href="/how-it-works"><Text component="a" className={`${classes.link} ${styles.link}`}>How it Works</Text></Link>
          <Link href="/pricing"><Text component="a" className={`${classes.link} ${styles.link}`}>Pricing</Text></Link>
          <Link href="/faq"><Text component="a" className={`${classes.link} ${styles.link}`}>FAQ</Text></Link>
        </Stack>
      </Collapse>
    </HeaderActive>
  );
}