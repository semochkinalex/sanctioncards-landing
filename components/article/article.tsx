import { Button, Text, ThemeIcon } from '@mantine/core';
import { FC } from 'react';
import { Upload } from 'tabler-icons-react';
import styles from './article.module.css';

interface IArticle {
    title: string;
    image: string;
    children?: React.ReactNode;

    variant?: 'light' | 'white'; 
    textPosition?: 'left' | 'right';
}

const Article: FC<IArticle> = ({title, image, children, variant = 'white', textPosition = 'left'}) => {
    return (
        <article className={`${styles.article} ${variant === 'light' ? styles.light : ''}`}>
            <div className={styles.heading}>
                    <Text className={styles.title} variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} component='h2'>
                        {title}
                    </Text>
            </div>
            <div className={`${styles.content} ${textPosition === 'right' ? styles.right : ''}`}>
                <div className={styles.children}>
                    <Text className={`${styles.title} ${styles.desktop}`} variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} component='h2'>
                                {title}
                    </Text>
                    {children}
                </div>
                <img className={`${styles.image} ${styles.desktop}`} src={image} alt="image" />
            </div>
        </article>
    );
}

export default Article;