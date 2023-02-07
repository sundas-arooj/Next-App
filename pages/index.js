import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basic Next App</title>
      </Head>
      <h1>Hello!</h1>
    </div>
  )
}
