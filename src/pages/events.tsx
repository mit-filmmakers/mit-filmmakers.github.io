import "../styles/index.scss";
import * as React from "react";
import Layout from "../components/Layout";
import { graphql, PageProps, Link } from "gatsby";
import slugify from "slugify";

interface EventProps {
  name: string,
  category: string,
  date: string,
  location: string,
}

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

const Event = ({ name, category, date, location }: EventProps) => <section className="section">
<article className="container content is-max-desktop">
  <h2>
    <Link to={`/events/${slugify(name)}`}>
      { name }
    </Link>
  </h2>
  <div>
    <span className="tag is-medium is-info">{ category }</span>
  </div>
  <p>
    { date } @ { location }
  </p>
</article>
</section>

const Events = ({ data }: PageProps<Queries.EventsQuery>) => {
  const nodes: EventProps[] = data.notionDatabase?.childrenNotionPage?.map((event) => {
    const { title, properties } = event || {};
    return {
      name: title || "",
      category: properties?.Category || "",
      date: properties?.Date?.start || "July 01, 1921",
      location: properties?.Location || ""}
  }) || [];
  nodes.sort((a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime());
  return (
    <Layout slug="events">
      <main>
        <Introduction />
        {nodes.map(Event)}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query Events {
    notionDatabase(title: {eq: "Events"}){
      childrenNotionPage{
        title
        properties {
          Category
          Date {
            start(formatString: "MMMM DD, YYYY")
          }
          Location
        }
      }
    }
  }
`

export default Events
