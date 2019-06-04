import { Link } from "next/link"
import styled from "styled-components"

export const MainNavbar = () => (
  <NavWraper>
    <NavHeader />
    <RawNavbar>
      <ul>
        <li>پرونده</li>
        <li>لیست خدمات</li>
        <li>پیکربندی</li>
      </ul>
    </RawNavbar>
  </NavWraper>
)

const NavWraper = styled.div`
  width: 230px;
  height: 100%;
  position: fixed;
  right: -230px;
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
  direction: rtl;

  ul {
    width: 100%;
    height: auto;
    list-style: none;
    padding-right: 10px;
  }
  li {
    width: 100%;
    height: 30px;
  }
`
