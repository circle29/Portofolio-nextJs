import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { LinkArrow } from "@/components/Icons";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexius Adi Nugroho</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full justify-center min-h-screen dark:text-light ">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full">
            <div className="w-full flex justify-center">
              <AnimatedText
                text="Hello! My Name is"
                className="!text-6x1 xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
              />
            </div>
          </div>
          <div>
            <AnimatedText
              text="Alexius Adi Nugroho"
              className="!text-5xl xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
            />
          </div>
          <div>
            <AnimatedText
              className="!text-2xl !font-normal !w-3/4"
              text="A Law Graduated and a Full Stack Web Development. I'm starting learning programming from 2022. And im seeking for career opportunities. Hope We can work together!"
            />
          </div>
          <div className="flex items-center justify-center size-2xl self-start mt-2">
            <Link
              href="/CV-AlexiusAdiNugroho.pdf"
              className="flex items-center bg-dark text-light p-2.5 px-4 rounded-lg text-lg font-semibold  hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
              download={true}
            >
              Resume <LinkArrow className={"w-6 ml-1"} />
            </Link>
            <Link
              href="mailto:alexiusnicholas@gmail.com"
              target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-dark underline hover:bg-dark hover:text-light border-solid rounded-lg p-2.5 px-2 dark:text-light "
            >
              Contact
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
}
