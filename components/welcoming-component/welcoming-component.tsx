import React from 'react';
import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  Image,
} from '@mantine/core';
import { Check } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,

    [theme.fn.smallerThan('md')]: {
      justifyContent: 'center'
    },
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('md')]: {
      textAlign: 'center',
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  subtitle: {
    [theme.fn.smallerThan('md')]: {
      textAlign: 'center',
    },
    [theme.fn.smallerThan('xs')]: {
      maxWidth: 380,  
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  list: {
    [theme.fn.smallerThan('md')]: {
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 430,
    },
  },

  buttons: {
    [theme.fn.smallerThan('md')]: {
      marginRight: 'auto',
      marginLeft: 'auto',
      // maxWidth: 430,
    },
  },

  image: {
    flex: 1,
    margin: 'auto 0',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export function WelcomingComponent() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Sanction Proof <span className={classes.highlight}>Your</span> <br /> Online Payments
            </Title>
            <Text color="dimmed" mt="md" className={classes.subtitle}>
            SanctionCards.com provides a
Mastercard/Visa payment card linked to a
European address for online purchases, online
subscriptions, and digital products and
services, even if the member's bank cards are
blocked due to sanctions.

            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Check size={12} />
                </ThemeIcon>
              }
              className={classes.list}
            >
              <List.Item>
                <b>European address</b> – for online billing.
              </List.Item>
              <List.Item>
                <b>One-Time Use Cards</b> – for secure
                  payments online and for
                  frequent/subscription purchases.
              </List.Item> 
            </List>

            <Group mt={30} className={classes.buttons}>
              <Button size="md" className={classes.control}>
                Get started
              </Button>
              <Button variant="light" size="md" className={classes.control}>
                How we Work
              </Button>
            </Group>
            </div>
                <Image className={classes.image} src="https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg" alt="worker" />
            </div>
      </Container>
    </div>
  );
}