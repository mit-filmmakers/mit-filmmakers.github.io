import * as React from "react";
import "../styles/index.scss";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Introduction = ({ content }: { content: string }) => <section className="section">
  <article className="container content is-max-desktop">
    <h1>
      Philosophy
    </h1>
    <MDXRenderer>
      {content}
    </MDXRenderer>
  </article>
</section>

// markup
const Philosophy = ({ data }: PageProps<Queries.PhilosophyQuery>) => {
  let content = data?.mdx?.body || "";
  return (
    <Layout slug="philosophy">
      <Introduction content={content}/>
    </Layout>
  )
}

export const query = graphql`
query Philosophy {
  mdx(frontmatter: {title: {eq: "Philosophy"}}) {
    body
  }
}
`

export default Philosophy
