import styled from "styled-components"
import Link from "next/link"

export const MainNavbar = props => (
  <NavWraper right={props.right}>
    <NavHeader>
      <NavHeaderProPic />
    </NavHeader>
    <RawNavbar>
      <ul>
        <Link href="/">
          <li>
            <a>صفحه اصلی</a>
          </li>
        </Link>
        <Link href="/soon">
          <li>
            <a>پرونده</a>
          </li>
        </Link>
        <Link href="/soon">
          <li>
            <a>لیست خدمات</a>
          </li>
        </Link>
        <Link href="/soon">
          <li>
            <a>تاریخچه</a>
          </li>
        </Link>
        <Link href="/setup">
          <li>
            <a>پیکربندی</a>
          </li>
        </Link>
        <Link href="/">
          <li>
            <a>درباره ما</a>
          </li>
        </Link>
        <Link href="/">
          <li>
            <a>تماس با ما</a>
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

/* - - - Main Styled Components - - - */
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

/* - - - Nav Header Components - - - */

const NavHeader = styled.div`
  width: 100%;
  height: 100px;
  background: #666;
  overflow: hidden;
`
const NavHeaderProPic = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-top: 20px;
  margin-right: 20px;
  border: 2px solid #333;
  background: #999;
  float: right;
`

/* - - - RawNav Components - - - */

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
