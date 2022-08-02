import "../styles/index.scss";
import * as React from "react";
import { graphql, PageProps, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import slugify from "slugify";

export default function Event({data}: PageProps<Queries.EventQuery>) {
  const {title, properties, childMdx} = data.notionPage || {};
  const {name, category, start, end, location} = {
    name: title || "",
    category: properties?.Category || "",
    start: new Date(properties?.Date?.start || "July 01, 1921"),
    end: new Date(properties?.Date?.end || "July 01, 1921"),
    location: properties?.Location || ""
  };
  const formatOptions = {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
  return <Layout slug={`events/${slugify(name)}}`}>
    <section className="section">
      <article className="container content is-max-desktop">
        <h2>
          { name }
        </h2>
        <div>
          <span className="tag is-medium is-info">{ category }</span>
        </div>
        <p>
          {
            start.toDateString() === end.toDateString() ?
            start.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) + ' - ' + end.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'}) :
            start.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) + ' - ' + end.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'})
          } @ { location }
        </p>
      </article>
      <article className="container is-max-desktop content">
        <MDXRenderer>
          {childMdx?.body || ""}
        </MDXRenderer>
      </article>
    </section>
  </Layout>
}

export const query = graphql`
  query Event ($id: String) {
    notionPage(id: {eq: $id}) {
      title
      properties {
        Category
        Date {
          start
          end
        }
        Location
      }
      childMdx {
        body
      }
    }
  }
`

