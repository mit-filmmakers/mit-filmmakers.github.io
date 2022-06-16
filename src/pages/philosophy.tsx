import * as React from "react"
import "../styles/bulma.scss"
import "../styles/index.scss"
import Layout from "../components/Layout"
import { graphql, PageProps } from "gatsby"

//  style={{backgroundImage: "linear-gradient(to bottom, rgba(200,240,255,0.5), rgba(255,255,255,0.5))"}}

const Introduction = ({ content }: { content: string }) => <section className="section">
  <article className="container content is-max-desktop">
    <h1>
      Philosophy
    </h1>
    <p>
      { content}
    </p>
  </article>
</section>

// markup
const Philosophy = ({ data }: PageProps<Queries.PhilosophyQuery>) => {
  let content = data.notionPage?.internal.content || "";
  let philosophy = content.match(/\n# Philosophy\n\n([\s\S]+\n)/)[1];
  console.log(philosophy);
  return (
    <Layout slug="philosophy">
      <main>
        <Introduction content={philosophy}/>
      </main>
    </Layout>
  )
}

export const query = graphql`
query Philosophy {
  notionPage(id: {eq: "02cf680f-b644-54aa-9622-843e0b386615"}) {
    internal {
      content
    }
  }
}
`

export default Philosophy
