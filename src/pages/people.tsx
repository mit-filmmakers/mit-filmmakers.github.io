import * as React from "react";
import "../styles/index.scss";
import { ReactElement } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";

interface PersonProps {
  name: string,
  email: string,
  affiliation: string,
  major: string,
  category: string,
  position?: string,
  photo: ReactElement
}

const Person = ( {name, email, affiliation, major, photo, position }: PersonProps ) => <div key={name} className="card" style={{margin: "1.5rem",overflow: "hidden", position: "relative", zIndex: 0}}>
<div className="card-image" style={{width: "250px", height: "250px", padding: 0}}>
  {photo}
</div>
<div className="card-content" style={{width: "250px", height: position ? "205px" : "165px", fontSize: "16px"}}>
  <div className="media">
    <div className="media-content">
      <p className="title is-5">{name}</p>
      {
        position ? <p><span className="tag is-info is-light">{position}</span></p> : <div></div>
      }
      <p className="subtitle is-6"><a href={"mailto:" + email}>{email}</a></p>
      <p>{affiliation}, {major}</p>
    </div>
  </div>
</div>
</div>

const Group = ({ category, nodes }: { category: string, nodes: PersonProps[] }) => <section className="section">
  <article className="container content">
    <h2>
      { category }
    </h2>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {nodes.map(x => <Person {...x}/>)}
    </div>
  </article>
</section>

const People = ({ data }: PageProps<Queries.PeopleQuery>) => {
  const nodes: PersonProps[] = data.notionDatabase?.childrenNotionPage?.map(page => {
    const { title, properties, image } = page || {};
    const imageData = image?.childImageSharp?.gatsbyImageData;
    const photo = imageData ? <GatsbyImage image={imageData} alt={title || ""}/> : <StaticImage src={"../images/mitao.jpg"} alt="fallback" />
    return {
      name: title || "",
      email: properties?.EDU_Email || "",
      affiliation: properties?.Affiliation || "",
      major: properties?.Major || "",
      category: properties?.Category || "",
      position: properties?.Position || undefined,
      photo: photo }
  }) || [];
  nodes.sort((a, b) => a.name.localeCompare(b.name));
  const officers = nodes.filter(({ category }) => category == 'Officer');
  const members = nodes.filter(({ category }) => category == 'Member');
  const alumni = nodes.filter(({ category }) => category == 'Alumni');
  return (
    <Layout slug="people">
      <Hero title="People" subtitle='' />
      <Group category="Officers" nodes={officers}/>
      <Group category="Members" nodes={members}/>
      <Group category="Alumni" nodes={alumni}/>
    </Layout>
  )
}

export const query = graphql`
query People {
  notionDatabase(title: {eq: "People"}) {
    childrenNotionPage {
      title
      image {
        childImageSharp {
          gatsbyImageData(width: 250, height: 250, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      properties {
        Affiliation
        Category
        EDU_Email
        Major
        Position
      }
    }
  }
}
`

export default People
