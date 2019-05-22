import styled, { createGlobalStyle } from "styled-components"
import { Header } from "./Header"
import { MainNavbar } from "./Navbar"

const Layout = props => (
  <Wrapper>
    <GlobalStyle />
    <Header />
    <MainNavbar />
    {props.children}{" "}
  </Wrapper>
)

export default Layout

const Wrapper = styled.div`
  overflow: hidden;
`

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
