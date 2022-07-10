import { Text } from '@mantine/core';
import { FC } from 'react';
import styles from './team-members.module.css';

interface ITeamMember {
    name: string;
    position: string;
    description: string;
    avatar: string;
    email: string;
}

const TeamMember: FC<ITeamMember> = ({name, position, description, avatar, email}) => {
    return (
        <li className={styles.member}>
            <div className={styles.credentials}>
                <img className={styles.image} src={avatar} alt={name} />
                <Text size="md" weight={700} className={styles.name}>{name}</Text>
                <Text className={styles.position} size={'md'} weight={700}>{position}</Text>
            </div>
            <Text size="xs" className={styles.email} color="gray" weight={600}>{email}</Text>

            <Text className={styles.description} color="black" weight={600}>{description}</Text>
        </li>
    );
}

const TeamMembers = () => {
    return (
        <section className={styles.container}>
            <Text component='h2' size="xl" className={styles.team} weight={700}>Meet the <span className={styles.highlight}>Masterminds</span> behind the project.</Text>
            <ul className={styles.list}>
                <TeamMember email={'alex@sanctioncards.com'} name={'Alex Semochkin'} position={'CTO'} description={'Wants to create a better world to live in. Works as a developer.'} avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'} />
                <TeamMember email={'alex@sanctioncards.com'} name={'Alex Semochkin'} position={'CTO'} description={'Wants to create a better world to live in. Works as a developer.'} avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'} />
                <TeamMember email={'alex@sanctioncards.com'} name={'Alex Semochkin'} position={'CTO'} description={'Wants to create a better world to live in. Works as a developer.'} avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'} />
            </ul>

        </section>
    );
}

export default TeamMembers;