import { Nav, Navbar } from "react-bootstrap"
import { Link, useResolvedPath, useMatch } from "react-router-dom"

export default function NavigationBar() {
  return (
    <>
      <Navbar className="nav">
        <Navbar.Brand href="/home">
          <svg
            className="logo"
            id="Initials"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Ellipse_1"
              data-name="Ellipse 1"
              transform="translate(6)"
              fill="#0f0f0f"
              stroke="#fff"
              strokeWidth="2"
            >
              <circle cx="46.5" cy="46.5" r="46.5" stroke="none" />
              <circle cx="46.5" cy="46.5" r="45.5" fill="none" />
            </g>
            <text
              id="KS"
              transform="translate(0 73)"
              fill="#fff"
              fontSize="80"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                KS
              </tspan>
            </text>
          </svg>
        </Navbar.Brand>
        <Nav className="my-3">
          <ul className="list">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/AboutMe">About Me</CustomLink>
            <CustomLink to="/Portfolio">Portfolio</CustomLink>
          </ul>
        </Nav>
      </Navbar>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvePath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link className="list-point" to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
