import * as React from "react";
import "../styles/index.scss";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";
import { formatDate } from "../utils/metadata";
import Hero from "../components/Hero";

interface FilmProps {
  name: string,
  category: string,
  url: string,
  premiered: Date,
  directed_by: string,
  written_by: string,
  cinematography: string,
  starring: string,
}

const Film = ({url, name, premiered, directed_by, written_by, starring}: FilmProps) => <article className="container content" key={url} style={{padding: "2rem 0"}}>
  <div className="columns">
    <div className="column is-one-third" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <h2>{name}</h2>
      <p>Premiered on { formatDate(premiered) }</p>
      <p>
        🎬 Directed by &nbsp;<strong>{directed_by}</strong><br />
        ✍️ Written by &nbsp;<strong>{written_by}</strong><br />
        🌟 Starring &nbsp;<strong>{starring}</strong>
      </p>
    </div>
    <div className="column">
      <div style={{position: "relative", padding: "30% 45%"}}>
        <iframe style={{position: "absolute", width: "100%", height: "100%", left: "0", top: "0"}} src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>
    </div>
  </div>
</article>

const Display = ({ nodes }: { nodes: FilmProps[] }) => <section className="section">
  {nodes.map(Film)}
</section>

const Portfolio = ({ data }: PageProps<Queries.PortfolioQuery>) => {
  const nodes: FilmProps[] = [];
  data.notionDatabase?.childrenNotionPage?.map(page => {
    if (page && page.title && page.properties) {
      const { Category, YouTube_URL, Premiered, Directed_by, Written_by, Cinematography, Starring } = page.properties;
      if (Category && YouTube_URL && Premiered && Premiered.start)
      nodes.push({
        name: page.title,
        category: Category,
        url: YouTube_URL,
        premiered: new Date(Premiered.start),
        directed_by: Directed_by || "",
        written_by: Written_by || "",
        cinematography: Cinematography || "",
        starring: Starring || "",
      })
    }
  });
  nodes.sort((a, b) => b.premiered.getTime() - a.premiered.getTime())
  return (
    <Layout slug="portfolio">
      <Hero title='Portfolio' subtitle={'Here are films created by our fellow students. Shout out to everybody! We hope you enjoy watching them 😉'} />
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
        Directed_by
        Written_by
        Cinematography
        Starring
      }
    }
  }
}
`

export default Portfolio
