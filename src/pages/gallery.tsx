import * as React from "react"
import "../styles/bulma.scss"
import "../styles/index.scss"
import Layout from "../components/Layout"
import { graphql, PageProps } from "gatsby"

const Introduction = () => <section className="section">
  <article className="container content is-max-desktop">
    <h1>
      Gallery
    </h1>
    <p>
      Our works: ...
    </p>
  </article>
</section>

interface FilmProps {
  url: string,
  title_zh: string,
  title_en: string
}

const Film = ({url, title_en, title_zh}: FilmProps) => <article className="container content is-max-desktop" key={url}>
  <h2>{title_en}</h2>
  <div style={{position: "relative", padding: "30% 45%", maxWidth: 1080}}>
    {/* <iframe style={{position: "absolute", width: "100%", height: "100%", left: "0", top: "0"}} src={url + "&high_quality=1"} scrolling="no" data-border="0" data-frameborder="no" data-framespacing="0" data-allowfullscreen="true">
    </iframe> */}
    <iframe style={{position: "absolute", width: "100%", height: "100%", left: "0", top: "0"}} src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
  </div>
</article>

const Display = ({ nodes }: { nodes: FilmProps[] }) => <section className="section">
  {nodes.map(Film)}
</section>

// markup
const Gallery = ({ data }: PageProps<Queries.GalleryQuery>) => {
  const nodes: FilmProps[] = data.allNotionPage.nodes.map(({ title, properties }) => {
    return {
      title_en: title || "",
      title_zh: properties?.Name__Chinese_ || "",
      url: properties?.Youtube_URL || ""
    }
  })
  return (
    <Layout slug="gallery">
      <main>
        <Introduction />
        <Display nodes={nodes}/>
      </main>
    </Layout>
  )
}

export const query = graphql`
query Gallery {
  allNotionPage(
    filter: {parent: {id: {eq: "7987da06-dd02-5fd4-b069-46e26f3e1171"}}}
  ) {
    nodes {
      title
      properties {
        Bilibili_URL
        Youtube_URL
        Name__Chinese_
        Category
      }
    }
  }
}
`

export default Gallery
