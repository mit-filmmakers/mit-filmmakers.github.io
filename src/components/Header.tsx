import { Link } from "gatsby"
import React, {Component, Fragment} from "react"
import summary, { title } from "../utils/metadata"

interface NavItemProps {
  name: string,
  slug: string,
  current: string,
}

const NavItem = ({name, slug, current}: NavItemProps) => <Link to={`/${slug}/`.replace('//', '/')} key={slug} className={"navbar-item" + (slug === current ? " navbar-item-current" : "")}>
  <span>&nbsp;&nbsp;{name}</span>
</Link>

interface NavProps { slug: string }
interface NavState { expand: boolean }

class Header extends Component<NavProps, NavState> {
  state: NavState = {
    expand: false
  }

  render() {
    return <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="content is-medium container">
        <div className="navbar-brand">
          <a className="navbar-item" style={{fontSize: "1.5rem", padding: "0 1.5rem"}} href="/">
            <b>{title}</b>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => { this.setState({ expand: !this.state.expand }) }}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={this.state.expand ? "navbar-menu is-active" : "navbar-menu"}>
          <div className="navbar-start" style={{justifyContent: "center", marginLeft: "auto"}}>
            {summary.map(x => <NavItem {...x} current={this.props.slug} key={x.slug} />)}
          </div>
        </div>
      </div>
  </nav>
  }
}

// <div className="navbar-end">
// <div className="navbar-item">
//   <div className="buttons">
//     <Link to="/404/" className="button is-info">
//       <strong>订阅</strong>
//     </Link>
//     {/* <a className="button is-light">
//       Log in
//     </a> */}
//   </div>
// </div>
// </div>

export default Header
