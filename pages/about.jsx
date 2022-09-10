import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Sergio Hernández</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>About Page</h1>
        <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.jsx</code>
        </p>
      </main>
    </div>
  )
}
