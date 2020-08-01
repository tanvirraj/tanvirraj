import Head from "next/head";
import styles from "../styles/index.module.scss";
import cx from "classnames";

const name = "Tanvir Raj | Software Artisan";
export const siteTitle = "Tanvir Raj";

function HomePage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Tanvir Raj"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{name}</title>
      </Head>
      <div className={styles.homeContainer}>
        <div className={styles.title}>Tanvir Raj</div>
        <div className={styles.subTitle}>
          I’m Software Artisan, build digital products with
        </div>
        <div className={styles.skillsets}>
          <span className={cx(styles.skillSet, styles.skillTypescript)}>
            Typescript
          </span>
          <span className={cx(styles.skillSet, styles.skillReact)}>
            React.js
          </span>
          <span className={cx(styles.skillSet, styles.skillNode)}>Node.js</span>
        </div>
      </div>
    </>
  );
}

export default HomePage;
