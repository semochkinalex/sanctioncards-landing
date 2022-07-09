import React, { FC } from 'react';
import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 48,
    paddingBottom: 96,
  },

  item: {
    display: 'flex',
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 8],
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
    [theme.fn.smallerThan('sm')]: {
        marginRight: 'auto',
        maxWidth: 350,
        marginLeft: 'auto',
    }
  },

  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },
}));

interface FeatureImage {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface IBenefits {
  supTitle: React.ReactNode;
  description: React.ReactNode;
  // data: FeatureImage[];
}

interface IBenefit {
    title: string;
    description: string;
    image: string;
}

const Benefit: FC<IBenefit> = ({title, description, image}) => {

    const { classes } = useStyles();

    return (
      <div className={classes.item}>
        <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
          <Image src={image} alt="Icon" />
        </ThemeIcon>
  
        <div>
          <Text weight={700} size="lg" className={classes.itemTitle}>
            {title}
          </Text>
          <Text color="dimmed">{description}</Text>
        </div>
      </div>
    );
}

export function Benefits({ supTitle, description }: IBenefits) {
  const { classes } = useStyles();

  return (
    <Container size={700} className={classes.wrapper}>
      {/* <Text className={classes.supTitle}>{supTitle}</Text> */}

      <Title className={classes.title} order={2}>
        Why are we <span className={classes.highlight}>Better</span> than anyone else?
      </Title>

      <Container size={660} p={0}>
        <Text color="dimmed" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        style={{ marginTop: 30 }}
      >
        <Benefit title="Worldwide" description='Accepted by thousands of US online merchants' image={'https://www.svgrepo.com/show/230783/world.svg'} />
        <Benefit title="Straightforward" description='Easy to use payment cards issued by a US Bank' image={'https://www.svgrepo.com/show/362121/lightning.svg'} />
        <Benefit title="Convenient" description='Dozens of convenient load methods worldwide' image={'https://www.svgrepo.com/show/21824/credit-card.svg'} />
        <Benefit title="Reliable" description='Safe, secure and trusted by 100,000+ customers' image={'https://www.svgrepo.com/show/53149/shield.svg'} />
      </SimpleGrid>
    </Container>
  );
}