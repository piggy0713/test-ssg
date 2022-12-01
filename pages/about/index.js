import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import textData from "../../src/assets/data/texts.json";
// import PersonCard from "./PersonCard";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Hyperlink from "../../components/HyperLink";
import Button from "../../components/Button";

const About = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>About Page - CodeBusters</title>
        <meta
          name="description"
          content="Codebusters is a software agency that specializes in building web applications and mobile apps."
        />
        <meta property="og:title" content="About CodeBusters" />
        <meta
          property="og:description"
          content="Codebusters is a software agency that specializes in building web applications and mobile apps."
        />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <section>
        <Heading level="h1">{textData.about.h1}</Heading>
        <Paragraph>
          <span>{textData.about.span1}</span>
          <Hyperlink href={textData.about.link.url}>
            {textData.about.link.text}
          </Hyperlink>
          <span>{textData.about.span2}</span>
        </Paragraph>

        <Heading level="h2">{textData.about.flow_code.h2}</Heading>
        <Paragraph>{textData.about.flow_code.p1}</Paragraph>
        <Paragraph>
          <span>{textData.about.flow_code.p2.span1}</span>
          <Hyperlink internal href={textData.about.flow_code.p2.link.url}>
            {textData.about.flow_code.p2.link.text}
          </Hyperlink>
          <span>{textData.about.flow_code.p2.span2}</span>
        </Paragraph>
        <Paragraph>{textData.about.flow_code.p3}</Paragraph>
        {/* <UnorderedList>
          {textData.about.flow_code.list.map((item, ind) => (
            <li className="mb-3 last:mb-bodyBottom" key={`flow-list-${ind}`}>
              {item}
            </li>
          ))}
        </UnorderedList> */}
        <Paragraph>{textData.about.flow_code.cta}</Paragraph>
        <Button type="button" onClick={() => router.push("/contact")}>
          {textData.about.flow_code.button}
        </Button>
      </section>

      <section className="pt-4">
        <Heading level="h2">{textData.about.our_team.h2}</Heading>
        <Paragraph>{textData.about.our_team.p}</Paragraph>
        {/* <ul className="mx-auto max-w-3xl list-outside pl-0">
          {textData.about.our_team.people.map((person, ind) => {
            return <PersonCard key={`person-${ind}`} person={person} />;
          })}
        </ul> */}
        <Button type="button" onClick={() => router.push("/apply")}>
          {textData.about.our_team.button}
        </Button>
      </section>
    </>
  );
};

export default About;
