import Image from "next/image";
import '../styles/globals.scss';
import Layout from "../components/Layout";
import youtubeImg from '../public/youtube.png';
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
        <Image
            src={youtubeImg}
            width={500}
            height={350}
            alt="preview"
            placeholder="blur"
        />
    </Layout>
);

export default MyApp;
