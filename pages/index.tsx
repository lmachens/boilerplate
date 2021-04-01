import Head from "next/head";
import useSubscription from "../hooks/useSubscription";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [subscription, subscribe] = useSubscription();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <span>{subscription ? "subscribed" : "notSubscribed"}</span>
        <button onClick={subscribe}>subscribe</button>
      </main>
    </div>
  );
}
