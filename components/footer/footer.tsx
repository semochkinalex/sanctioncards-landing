import React from 'react';
import { createStyles, Text, Container, ActionIcon, Group } from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';

import styles from './footer.module.css';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    // marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 50,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 30,

    [theme.fn.smallerThan('xs')]: {
        marginTop: 24,
        justifyContent: 'center'
    },
  },

  wrapper: {
    width: 'fit-content',
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    },

    [theme.fn.smallerThan('xs')]: {
        textAlign: 'center'
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('xs')]: {
        textAlign: 'center',
    },
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.xs,
    },
  },

  copyright: {
    [theme.fn.smallerThan('xs')]: {
        textAlign: 'center',
    },
  }
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <div className={styles.name}><Text variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} size="xl" weight={700}>SanctionCards</Text></div>
          <Text size="xs" color="dimmed" className={classes.description}>
            Shop worldwide with no limits.
          </Text>
        </div>
        <div className={classes.groups}>
            <div className={classes.wrapper}>
                <Text className={classes.title}>Getting Started</Text>
                <Link href="/how-it-works"><Text component="a" className={classes.link}>Guides</Text></Link>
                <Link href="/how-it-works"><Text component="a" className={classes.link}>How it Works</Text></Link>
                <Link href="/how-it-works"><Text component="a" className={classes.link}>Fees & Pricing</Text></Link>
            </div>
            <div className={classes.wrapper}>
                <Text className={classes.title}>Developers</Text>
                <Link href="/how-it-works"><Text component="a" className={classes.link}>FAQs</Text></Link>
                <Link href="/how-it-works"><Text component="a" className={classes.link}>Contact Us</Text></Link>
                <Link href="/how-it-works"><Text component="a" className={classes.link}>Terms of Services</Text></Link>
            </div>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text className={classes.copyright} color="dimmed" size="sm">
          © 2022 SanctionCards. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}