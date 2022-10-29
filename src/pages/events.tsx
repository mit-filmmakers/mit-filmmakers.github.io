import "../styles/index.scss";
import * as React from "react";
import Layout from "../components/Layout";
import { graphql, PageProps, Link } from "gatsby";
import slugify from "slugify";
import { formatDuration, IEvent, validateEvent } from "../utils/metadata";
import { GatsbyImage } from "gatsby-plugin-image";
import Hero from "../components/Hero";

const Event = ({ name, category, duration, location, image, icon }: IEvent) => <section className="section" key={name}>
  <article className="container content">
    <Link to={`/events/${slugify(name)}`}>
      <div className="box columns" style={{margin: 0, padding: 0, overflow: "hidden", position: 'relative', zIndex: 0, fontSize: "16px"}}>
        <div className="column" style={{padding: 0}}>
          <GatsbyImage image={image} alt={name}/>
        </div>
        <div className="column content" style={{padding: "1.5rem", textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <h3>{ icon + '  ' + name }</h3>
          <p>{ formatDuration(...duration) }</p>
          <p>{ location }</p>
          <p>
            <span className="tag is-medium is-info is-light">{ category }</span>
          </p>
        </div>
      </div>
    </Link>
  </article>
</section>

const Events = ({ nodes }: { nodes: IEvent[] }) => <Layout slug="events">
  <main>
    <Hero title='Events' subtitle="We organize various workshops on film making skills and host film making competitions! We always provide free food thanks to the funding from MIT Graduate Student Council."/>
    {nodes.map(Event)}
  </main>
</Layout>

export default function ({ data }: PageProps<Queries.EventsQuery>) {
  const nodes: IEvent[] = [];
  data.notionDatabase?.childrenNotionPage?.map(page => {
    const event = validateEvent(page);
    if (event) {
      nodes.push(event);
    }
  });
  nodes.sort((a, b) => b.duration[0].getTime() - a.duration[0].getTime());
  return <Events nodes={nodes}/>
}

export const query = graphql`
  query Events {
    notionDatabase(title: {eq: "Events"}){
      childrenNotionPage{
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 600, height: 400, placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
        iconEmoji
        properties {
          Category
          Date {
            start
            end
          }
          Location
        }
      }
    }
  }
`
