import { Link } from "next/link"
import styled from "styled-components"

export const MainNavbar = () => (
  <NavWraper>
    <NavHeader>
      <div />
    </NavHeader>
    <RawNavbar />
  </NavWraper>
)

const NavWraper = styled.div`
  width: 230px;
  height: 100%;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1;
  background: #ccc;
`
const NavHeader = styled.div`
  width: 100%;
  height: 100px;
  background: #666;
`
const RawNavbar = styled.div`
  width: 100%;
  height: auto;
`
