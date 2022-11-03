import * as React from "react";
import "../styles/index.scss";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Hero from "../components/Hero";

const Introduction = ({ content }: { content: string }) => <section className="section">
  <article className="container content is-max-desktop">
    <MDXRenderer>
      {content}
    </MDXRenderer>
  </article>
</section>

export default function ({ data }: PageProps<Queries.JoinQuery>) {
  let content = data?.mdx?.body || "";
  return (
    <Layout slug="join">
      <Hero title="Join us" subtitle="We welcome everyone from the MIT community to join us!"/>
      <Introduction content={content}/>
    </Layout>
  )
}

export const query = graphql`
  query Join {
    mdx(frontmatter: {title: {eq: "Join us"}}) {
      body
    }
  }
`
