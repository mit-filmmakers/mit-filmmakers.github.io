import React from "react";

interface HeroProps {
    title: string,
    subtitle: string,
}

export default function ({ title, subtitle }: HeroProps) {
    return <section className="hero" style={{backgroundImage: "linear-gradient(to bottom, #333, #666"}}>
    <div className="hero-body" style={{maxWidth: "1440px", margin: "auto"}}>
      <p className="title" style={{color: "#ddd", textAlign: "center", margin: "2rem"}}>
        { title }
      </p>
      <p className="subtitle" style={{color: "#ddd", textAlign: "center"}}>
        { subtitle }
      </p>
    </div>
  </section>
}
