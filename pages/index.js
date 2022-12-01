import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import textData from "../src/assets/data/texts.json";
import Paragraph from "../components/paragraph";
import Heading from "../components/heading";
import Button from "../components/button";
import FullLogo from "../components/fullLogo";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page - CodeBusters</title>
        <meta
          name="description"
          content="Welcome to CodeBusters, a software agency that specializes in building web applications and mobile apps."
        />
        <meta property="og:title" content="CodeBusters - Software Agency" />
        <meta
          property="og:description"
          content="Welcome to CodeBusters, a software agency that specializes in building web applications and mobile apps."
        />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main>
        <section className="min-h-full-height flex flex-col flex-nowrap justify-center items-center">
          <FullLogo isHeader />
          <Paragraph className="max-w-3xl mx-auto mt-0 mb-bodyBottom text-justify">
            {textData.home.mission.p[0]}
          </Paragraph>

          <Button type="button" onClick={() => navigate("/about")}>
            {textData.home.mission.button}
          </Button>
        </section>

        <section className="min-h-full-height flex flex-col flex-nowrap justify-center items-center">
          <Heading level="h2">{textData.home.latest_articles.h2}</Heading>

          {/* <ArticleIndex articles={data.blogPostCollection.items} /> */}

          <Button type="button" onClick={() => navigate("/articles")}>
            {textData.home.latest_articles.button}
          </Button>
        </section>
      </main>
    </>
  );
};

export default Home;
