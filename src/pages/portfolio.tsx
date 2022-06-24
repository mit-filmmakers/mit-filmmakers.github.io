import * as React from "react";
import "../styles/index.scss";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";

const Introduction = () => <section className="section">
  <article className="container content is-max-desktop">
    <h1>
      Portfolio
    </h1>
    <p>
      Placeholder text
    </p>
  </article>
</section>

interface FilmProps {
  url: string,
  title: string,
}

const Film = ({url, title}: FilmProps) => <article className="container content is-max-desktop" key={url}>
  <h2>{title}</h2>
  <div style={{position: "relative", padding: "30% 45%"}}>
    <iframe style={{position: "absolute", width: "100%", height: "100%", left: "0", top: "0"}} src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
    </iframe>
  </div>
</article>

const Display = ({ nodes }: { nodes: FilmProps[] }) => <section className="section">
  {nodes.map(Film)}
</section>

// markup
const Portfolio = ({ data }: PageProps<Queries.PortfolioQuery>) => {
  const nodes: FilmProps[] = data.notionDatabase?.childrenNotionPage?.map(page => {
    const { title, properties } = page || {};
    return {
      title: title || "",
      url: properties?.YouTube_URL || ""
    }
  }) || [];
  return (
    <Layout slug="portfolio">
      <Introduction />
      <Display nodes={nodes}/>
    </Layout>
  )
}

export const query = graphql`
query Portfolio {
  notionDatabase(title: {eq: "Portfolio"}) {
    childrenNotionPage {
      title
      properties {
        Category
        YouTube_URL
      }
    }
  }
}
`

export default Portfolio
