import { Accordion, SegmentedControl, Text } from '@mantine/core';
import styles from './faqs.module.css';

const FrequentlyAskedQuestions = () => {
    return (
        <section className={styles.container}>
            <Text className={styles.title} component="h1" weight={800} size="xl">Frequently Asked Questions</Text>
            <SegmentedControl className={styles.control}
              fullWidth
              data={[
                { label: 'All', value: 'all' },
                { label: 'Troubleshooting', value: 'troubleshooting' },
                { label: 'Shopping', value: 'shopping' },
                { label: 'New Registration', value: 'newRegistration' },
                { label: 'Cards', value: 'cards' },
                { label: 'Loading', value: 'loading' },
              ]}
            />

            <Accordion>
                <Accordion.Item label="
Can I ship my items to any address?">
                  Unfortunately, the answer to this is no. You must use one of our certified freight forwarders and their shipping address to ship items outside of the US. You can find our certfied freight forwarding partners 
                </Accordion.Item>

                <Accordion.Item label="Flexibility">
                  Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
                </Accordion.Item>

                <Accordion.Item label="No annoying focus ring">
                  With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                </Accordion.Item>
            </Accordion>
        </section>

    );
}

export default FrequentlyAskedQuestions;