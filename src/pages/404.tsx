import * as React from "react";
import "../styles/index.scss";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout slug="404">
      <main>
        <section className="section container content">
          <h1>Page not found</h1>
          <p>
            Sorry{" "}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{" "}
            we couldn’t find what you were looking for.{" "}
            <Link to="/">Go home</Link>.
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default NotFound
