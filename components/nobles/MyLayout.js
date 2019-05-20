import styled, { createGlobalStyle } from "styled-components"
import { Header } from "./Header"

const Layout = props => (
  <Wrapper>
    <GlobalStyle />
    <Header /> {props.children}{" "}
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
