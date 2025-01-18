import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

import Footer from './components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Exploring and Pondering</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          src='https://github.com/Isaac-Tait.png'
          width={200}
          height={200}
          alt='Picture of the author'
          style={{ borderRadius: '50%' }}
        />
        <Link
          href='https://docs.eandp.cc/'
          target='_blank'
          rel='noopener noreferrer'
          prefetch={true}
          className={styles.button}
        >
          Blog and Essays
        </Link>
        <Link
          href='https://wormwoodsaga.com'
          target='_blank'
          rel='noopener noreferrer'
          prefetch={true}
          className={styles.button}
        >
          Novel
        </Link>
        <Link
          href='https://iloveto.fish'
          target='_blank'
          rel='noopener noreferrer'
          prefetch={true}
          className={styles.button}
        >
          Hobbies{' '}
        </Link>
        <div
          style={{
            display: 'flexRow',
            marginTop: '2rem',
          }}
        >
          <Link
            href='https://www.reddit.com/r/nosurf/comments/1hzkl7u/leaving_meta_can_it_realistically_be_done/'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={true}
            className={styles.button}
            style={{ marginRight: '2rem' }}
          >
            Bye bye Meta (and Twitter){' '}
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
