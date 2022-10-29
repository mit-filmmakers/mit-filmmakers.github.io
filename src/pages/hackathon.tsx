import React from "react";
import "../styles/index.scss";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Hero from "../components/Hero";

const Content = ({ content }: { content: string }) => <section className="section">
  <article className="container content is-max-widescreen mdx-content">
    <MDXRenderer>
      {content}
    </MDXRenderer>
  </article>
</section>

export default function ({ data }: PageProps<Queries.JoinQuery>) {
  let content = data?.mdx?.body || "";
  return (
    <Layout slug="hackathon">
      <Hero title="AI for Film Making Hackathon" subtitle="“Tell Me Your Dream”"/>
      <Content content={content}/>
    </Layout>
  )
}

export const query = graphql`
  query Hackathon {
    mdx(frontmatter: {title: {eq: "Hackathon"}}) {
      body
    }
  }
`
