import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import NavigationBar from "./pages/NavigationBar"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import "./style.css"
function App() {
  return (
    <>
      <NavigationBar />
      <Container className="invisBg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
