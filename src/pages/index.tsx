import "../styles/bulma.scss"
import "../styles/index.scss"
import * as React from "react"
import Layout from "../components/Layout"
import { graphql, PageProps } from "gatsby"

const Introduction = ({ content }: { content: string }) => <section className="section">
  <article className="container content is-max-desktop">
    <h1>
      Home
    </h1>
    <p>
      { content }
    </p>
  </article>
</section>

// markup
const IndexPage = ({ data }: PageProps<Queries.IndexQuery>) => {
  let content = data.notionPage?.internal.content || "";
  let introduction = content.match(/\n# Introduction\n\n([\s\S]+\n)#/)[1];
  console.log(introduction);
  return (
    <Layout slug="">
      <main>
        <Introduction content={introduction}/>
      </main>
    </Layout>
  )
}

export const query = graphql`
query Index {
  notionPage(id: {eq: "02cf680f-b644-54aa-9622-843e0b386615"}) {
    internal {
      content
    }
  }
}
`

export default IndexPage
