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

// const Address = () => <section className="column has-text-centered content">
//   <h4>地址</h4>
//   <p>
//     <a href="https://maps.google.com/maps?ll=42.361941,-71.090438&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=3475329887376826349">
//       Gates Building Room 785
//       <br />
//       32 Vassar Street
//       <br />
//       Cambridge, MA 02139
//     </a>
//   </p>
// </section>

const Copyright = () => <section className="column has-text-centered is-one-third">
  <h4>MIT Filmmakers © 2022</h4>
  {/* <p style={{marginBottom: ".5rem"}}>网页代码以 <a href="https://opensource.org/licenses/mit-license.php">MIT</a> 协议发布</p>
  <p>内容以 <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> 协议发布</p> */}
</section>

const Social = () => <section className="column has-text-centered" style={{display: "flex", justifyContent: "center"}}>
  <p>
    <a href="" style={{padding: "1rem"}}>
      <FaInstagram size="1.5rem" />
    </a>
  </p>
  <p>
    <a href="" style={{padding: "1rem"}}>
      <FaYoutube size="1.5rem" />
    </a>
  </p>
  <p>
    <a href="" style={{padding: "1rem"}}>
      <SiBilibili size="1.5rem" />
    </a>
  </p>
</section>

const Footer = () => <footer className="footer" style={{padding: "2rem"}}>
  <div className="container">
    <div className="columns" style={{alignItems: "center"}}>
      <Copyright />
      <Contact />
      <Social />
    </div>
  </div>
</footer>

export default Footer;
