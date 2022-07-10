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
                {/* <Text size="xs" className={styles.email} color="gray" weight={600}>{email}</Text> */}
            </div>

            <Text className={styles.description} color="gray" weight={600}>{description}</Text>
        </li>
    );
}

const TeamMembers = () => {
    return (
        <section className={styles.container}>
            <Text component='h2' size="xl" className={styles.team} weight={700}>Meet the <span className={styles.highlight}>Team</span></Text>
            <ul className={styles.list}>
                <TeamMember email={'alex@sanctioncards.com'} name={'Alex Semochkin'} position={'CTO'} description={'Responsible for developing.'} avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'} />
                <TeamMember email={'alex@sanctioncards.com'} name={'Maxim Lyash'} position={'CEO'} description={'Responsible for legal issues.'} avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'} />
                <TeamMember email={'alex@sanctioncards.com'} name={'Oleg Tinkoff'} position={'COO'} description={'Responsible for marketing.'} avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'} />
            </ul>

        </section>
    );
}

export default TeamMembers;