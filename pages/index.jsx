import Head from "next/head";
import Script from "next/script";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Navbar from "../components/NavbarMenu";
import Projects from "../components/Projects";
import Tools from "../components/Tools";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.onresize = () => {
            window.location.reload();
        };
    }, []);

    return (
        <>
            <Head>
                <title>Portofolio | Rengga Rizky Septian</title>
                <meta
                    name="description"
                    content="Selamat datang di portofolio milik Rengga Rizky Septian 👋"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="font-poppins overflow-x-hidden">
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
            <Footer />
        </>
    );
}
