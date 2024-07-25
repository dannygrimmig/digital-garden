import styles from './page.module.css';

export interface AboutProps {
  name: string;
}

export default async function About(props: AboutProps) {
  const { name } = await getProjects();
  return (
    <div className={styles['container']}>
      <h1>Welcome {name}!</h1>
    </div>
  );
}

async function getProjects(): Promise<AboutProps> {
  return {
    name: 'Danny',
  };
}
