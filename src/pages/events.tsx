import "../styles/index.scss";
import * as React from "react";
import Layout from "../components/Layout";
import { graphql, PageProps, Link } from "gatsby";
import slugify from "slugify";
import { formatDuration, IEvent, validateEvent } from "../utils/metadata";
import { GatsbyImage } from "gatsby-plugin-image";

const Introduction = () => <section className="section">
<article className="container content is-max-desktop">
  <h1>
    Events
  </h1>
  <p>
    Placeholder
  </p>
</article>
</section>

const Event = ({ name, category, duration, location, image, icon }: IEvent) => <section className="section" key={name}>
  <article className="container content is-max-desktop">
    <Link to={`/events/${slugify(name)}`}>
      <div className="box columns" style={{padding: 0, overflow: "hidden", position: 'relative', zIndex: 0, margin: 0}}>
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
    <Introduction />
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
