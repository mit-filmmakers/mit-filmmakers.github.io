import { Link } from "gatsby";
import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { SiBilibili } from "react-icons/si"

const Contact = () => <section className="column has-text-centered">
  <p>
    <a href="mailto:mit-filmmaker-association@mit.edu">
      mit-filmmaker-association@mit.edu
    </a>
  </p>
</section>

const Copyright = () => <section className="column has-text-centered is-one-third">
  <h4>MIT Filmmakers © 2022</h4>
  {/* <p style={{marginBottom: ".5rem"}}>网页代码以 <a href="https://opensource.org/licenses/mit-license.php">MIT</a> 协议发布</p>
  <p>内容以 <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> 协议发布</p> */}
</section>

const Social = () => <section className="column has-text-centered" style={{display: "flex", justifyContent: "center"}}>
  <p>
    <a href="https://www.instagram.com/mit_film_makers" target="_blank" style={{padding: "1rem"}}>
      <FaInstagram size="1.5rem" />
    </a>
  </p>
  <p>
    <a href="https://www.youtube.com/channel/UCzlYvhWkmx2Lcl1PFAQpUgw" target="_blank" style={{padding: "1rem"}}>
      <FaYoutube size="1.5rem" />
    </a>
  </p>
  <p>
    <a href="https://space.bilibili.com/1162010060" target="_blank" style={{padding: "1rem"}}>
      <SiBilibili size="1.5rem" />
    </a>
  </p>
</section>

const Footer = () => <footer className="footer">
  <div className="container">
    <div className="columns" style={{alignItems: "center"}}>
      <Copyright />
      <Contact />
      <Social />
    </div>
  </div>
</footer>

export default Footer;
