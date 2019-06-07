import styled from "styled-components"
import Link from "next/link"

export const MainNavbar = props => (
  <NavWraper right={props.right}>
    <NavHeader />
    <RawNavbar>
      <ul>
        <li>پرونده</li>
        <li>لیست خدمات</li>
        <Link href="/stp">
          <li>
            <a>پیکربندی</a>
          </li>
        </Link>
      </ul>
    </RawNavbar>
  </NavWraper>
)

export const NavBlank = props => (
  <MainNavBlank display={props.display} {...props} />
)

/* - - - Styled Components - - - */

const NavWraper = styled.div`
  width: 230px;
  height: 100%;
  position: fixed;
  right: ${p => (p.right ? p.right : "-230px")};
  top: 0px;
  z-index: 2;
  background: #ccc;
  transition: all 500ms;
`

const MainNavBlank = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1;
  top: 0;
  display: ${p => (p.display ? p.display : "none")};
  transition: all 500ms;
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
