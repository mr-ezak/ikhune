import styled, { createGlobalStyle } from "styled-components"
import { Header } from "./Header"
import { MainNavbar } from "./Navbar"
import MyDocument from "../../pages/_document"

const Layout = props => (
  <Wrapper>
    <Header />
    <MainNavbar id="main-navbar" />
    {props.children}{" "}
  </Wrapper>
)

export default Layout

const Wrapper = styled.div`
  overflow: hidden;
`
