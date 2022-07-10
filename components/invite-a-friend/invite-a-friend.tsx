import { Button, createStyles, Text } from '@mantine/core';
import styles from './invite-a-friend.module.css';

const useStyles = createStyles((theme) => ({
    main: {
        fontSize: 35,
        minWidth: 'fit-content',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    highlight: {
        position: 'relative',
        color: 'white',
        backgroundColor: '#12b886',
        borderRadius: theme.radius.sm,
        padding: '4px 12px',
      },
}));

const InviteAFriend = () => {

    const { classes } = useStyles();

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Text size="xl" weight={700} className={`${classes.main} ${styles.title}`}>Earn <span className={classes.highlight}>$5</span> by referring a friend</Text>
                <Button className={styles.button}>Claim Referal Link &#8594;</Button>
            </div>

        </section>
    );
}

export default InviteAFriend;