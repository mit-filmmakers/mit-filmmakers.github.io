import * as React from "react";
import "../styles/index.scss";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Introduction = ({ content }: { content: string }) => <section className="section">
  <article className="container content is-max-desktop">
    <h1>
      Join us
    </h1>
    <MDXRenderer>
      {content}
    </MDXRenderer>
  </article>
</section>

export default function ({ data }: PageProps<Queries.JoinQuery>) {
  let content = data?.mdx?.body || "";
  return (
    <Layout slug="join">
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
