import { Text } from '@mantine/core';
import CalculatePricing from '../../components/calculate-pricing/calculate-pricing';
import styles from './pricing.module.css';

const Pricing = () => {
    return (
        <main className={styles.main}>
            <Text className={styles.title} component="h1" weight={800} size="xl">
                Calculate My Pricing
            </Text>
            <CalculatePricing />
        </main>
    );
}

export default Pricing;