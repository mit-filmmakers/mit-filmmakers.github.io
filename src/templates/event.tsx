import "../styles/index.scss";
import * as React from "react";
import { graphql, PageProps, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";

export default function Event({data}: PageProps<Queries.EventQuery>) {
  const {title, properties, childMdx} = data.notionPage || {};
  const {name, id, category, date, location} = {
    name: title || "",
    id: properties?.ID || "",
    category: properties?.Category || "",
    date: properties?.Date?.start || "July 01, 1921",
    location: properties?.Location || ""}
  return <Layout slug={`events/${properties.ID}}`}>
    <section className="section">
    <article className="container content is-max-desktop">
      <h2>
        <Link to={`/events/${id}`}>
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
  </Layout>
}

export const query = graphql`
  query Event ($id: String) {
    notionPage(id: {eq: $id}) {
      title
      properties {
        ID
        Category
        Date {
          start(formatString: "MMMM DD, YYYY")
        }
        Location
      }
      childMdx {
        body
      }
    }
  }
`

