import "../styles/index.scss";
import * as React from "react";
import { graphql, PageProps, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import slugify from "slugify";
import { formatDuration, IEvent, validateEvent } from "../utils/metadata";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ({ data }: PageProps<Queries.EventQuery>) {
  const { name, category, duration, location, image, icon } = validateEvent(data.notionPage)!;
  return <Layout slug={`events/${slugify(name)}}`}>
    <section className="section">
      <article className="container content is-max-desktop has-text-centered">
        <h2>
          { icon + ' ' + name }
        </h2>
        <p>
          { formatDuration(...duration) }
        </p>
        <p>
          { location }
        </p>
        <GatsbyImage image={image} alt={name}/>
        {/* <div>
          <span className="tag is-medium is-info">{ category }</span>
        </div> */}
      </article>
    </section>
    <section className="section">
      <article className="container is-max-desktop content">
        <MDXRenderer>
          {data?.notionPage?.childMdx?.body || ""}
        </MDXRenderer>
      </article>
    </section>
    <section className="section">
      <article className="container is-max-desktop content has-text-centered">
        <Link to='/events'>
          <span className={`button is-info`} style={{minWidth: '5.5rem'}}>Back to Events page</span>
        </Link>
      </article>
    </section>
  </Layout>
}

export const query = graphql`
  query Event($id: String) {
    notionPage(id: {eq: $id}) {
      title
      image {
        childImageSharp {
          gatsbyImageData(width: 1200, height: 800, placeholder: BLURRED, formats: [AUTO, WEBP])
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
      childMdx {
        body
      }
    }
  }
`

