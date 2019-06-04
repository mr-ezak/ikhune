import styled, { createGlobalStyle } from "styled-components"
import { Header } from "./Header"

const Layout = props => (
  <Wrapper>
    <Header />
    {props.children}{" "}
  </Wrapper>
)

export default Layout

const Wrapper = styled.div`
  overflow: hidden;
`
