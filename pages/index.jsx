import Head from "next/head";
import Script from "next/script";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Navbar from "../components/NavbarMenu";
import Projects from "../components/Projects";
import Tools from "../components/Tools";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    // useEffect(() => {
    //     window.onresize = () => {
    //         router.push("/");
    //         window.location.reload();
    //     };
    // }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Portofolio | Rengga Rizky Septian</title>
                <meta
                    name="description"
                    content="Selamat datang di portofolio milik Rengga Rizky Septian 👋"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="font-poppins">
                <Script
                    src="https://kit.fontawesome.com/d8beacd362.js"
                    crossorigin="anonymous"
                />
                <Navbar />
                <Hero />
                <Experiences />
                <Tools />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}
