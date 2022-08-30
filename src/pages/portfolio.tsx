import * as React from "react";
import "../styles/index.scss";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";
import { formatDate } from "../utils/metadata";

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
  name: string,
  category: string,
  url: string,
  premiered: Date,
}

const Film = ({url, name, premiered}: FilmProps) => <article className="container content is-max-desktop" key={url}>
  <h2>{name}</h2>
  <p>Premiered on { formatDate(premiered) }</p>
  <div style={{position: "relative", padding: "30% 45%"}}>
    <iframe style={{position: "absolute", width: "100%", height: "100%", left: "0", top: "0"}} src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
    </iframe>
  </div>
</article>

const Display = ({ nodes }: { nodes: FilmProps[] }) => <section className="section">
  {nodes.map(Film)}
</section>

const Portfolio = ({ data }: PageProps<Queries.PortfolioQuery>) => {
  const nodes: FilmProps[] = [];
  data.notionDatabase?.childrenNotionPage?.map(page => {
    if (page && page.title && page.properties) {
      const { Category, YouTube_URL, Premiered } = page.properties;
      if (Category && YouTube_URL && Premiered && Premiered.start)
      nodes.push({
        name: page.title,
        category: Category,
        url: YouTube_URL,
        premiered: new Date(Premiered.start)
      })
    }
  });
  nodes.sort((a, b) => b.premiered.getTime() - a.premiered.getTime())
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
        Premiered {
          start
        }
      }
    }
  }
}
`

export default Portfolio
