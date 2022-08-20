import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Tedy</title>
        <meta name="description" content="This is James' website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center h-screen ">
        <p className="font-semibold text-5xl font-mono text-center">
          Hi, I'm James
        </p>
        <p className="text-lg font-mono max-w-3xl mt-8 text-center">
          I'm Software Engineer living in Jakarta, Indonesia. I'm interested in
          AI, Blockchain, and Mobile App.
        </p>
        <div className="flex w-full h-5 justify-center mt-5">
          <Link href={"https://github.com/jte0711"} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
            </a>
          </Link>

          <Link
            href={"https://stackoverflow.com/users/7870211/jted95"}
            passHref
          >
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faStackOverflow}
                className="text-xl ml-4"
              />
            </a>
          </Link>

          <Link href={"https://twitter.com/jmstdy95"} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-xl ml-4" />
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
