import * as React from "react";
import "../styles/index.scss";
import Layout from "../components/Layout";

const Introduction = () => <section className="section">
  <article className="container content is-max-desktop">
    <h1>
      Home
    </h1>
    <p>
      MIT Film Makers Association provides unprecedented opportunities of film production and artistic expression for MIT students, staff and alumni. We are a welcoming and loving community for cinephiles, movie critics, filmmakers and potential filmmakers at MIT, Harvard, and all other colleges/schools around Boston. We hope to create a platform for many talents, under the guidance from advisors, to thrive and shine. Our films will keep valuable footage about the popular culture of MIT students as well as all walks of life in this vibrant city. Our association is funded by MIT GSC.
    </p>
  </article>
</section>

// markup
const Index = () => {
  return (
    <Layout slug="">
      <Introduction />
    </Layout>
  )
}

export default Index
