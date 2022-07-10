import { Alert, Button, Select, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { AlertCircle } from 'tabler-icons-react';
import styles from './calculate-pricing.module.css';

const CalculatePricing = () => {

    const form = useForm({
        initialValues: {
            country: '',
            method: '',
            amount: 0,
        },
        validate: {
          amount: (value) => value >= 50 ? null : 'Load Amount must be greater or equal to $50.',
        }
    });

    return (
      <section className={styles.container}>
          <form className={styles.form} onSubmit={form.onSubmit((values: any) => console.log(values))}>
              <Select
                label="Your Country"
                placeholder="Your Country..."
                searchable
                nothingFound="No options"
                data={['Russia', 'Iran']}
                required
                {...form.getInputProps('country')}
              />
              <Select
                label="Load Method"
                placeholder="Load Method..."
                searchable
                nothingFound="No options"
                data={['Tinkoff', 'Iran Bank']}
                required
                {...form.getInputProps('method')}
              />
              <TextInput type="number" label="Load Amount" placeholder={"Load Amount..."} required {...form.getInputProps('amount')} />
              <Button type="submit" className={styles.submit}>Calculate My Fee</Button>
          </form>
          <div className={styles.dashboard}>
            <Text weight={700} className={styles.amount} variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>$53.63</Text>
            <Text color="gray" weight={500} className={styles.description}>$3.00 + 3% fee</Text>
            <Text color="gray" weight={500} className={styles.alert}>This calculator is indicative and for informational purposes only and is not a guarantee of actual fees accessed on your load.</Text>
            {/* <Alert icon={<AlertCircle size={16} />}>
            This calculator is indicative and for informational purposes only and is not a guarantee of actual fees accessed on your load.
            </Alert> */}
          </div>
        </section>
    );
}

export default CalculatePricing;