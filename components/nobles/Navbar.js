import styled from "styled-components"
import Link from "next/link"
import * as Icons from "./Icons"

export const MainNavbar = props => (
  <NavWraper right={props.right}>
    <NavHeader>
      <NavHeaderProPic>
        <Icons.UserProIcon />
      </NavHeaderProPic>
      <NavHeaderInfo>
        <h5>سلام جناب آقای کاربر</h5>
        <h6>9395772956</h6>
      </NavHeaderInfo>
    </NavHeader>
    <RawNavbar>
      <ul>
        <Link href="/">
          <li>
            <Icons.DashboardIcon />
            <a>صفحه اصلی</a>
          </li>
        </Link>
        <Link href="/soon">
          <li>
            <Icons.UserProfileIcon />
            <a>پرونده</a>
          </li>
        </Link>
        <Link href="/soon">
          <li>
            <Icons.ServicesListIcon />
            <a>لیست خدمات</a>
          </li>
        </Link>
        <Link href="/soon">
          <li>
            <Icons.HistoryIcon />
            <a>تاریخچه</a>
          </li>
        </Link>
        <Link href="/setup">
          <li>
            <Icons.SetupIcon />
            <a>پیکربندی</a>
          </li>
        </Link>
        <Link href="/">
          <li>
            <Icons.AboutIcon />
            <a>درباره ما</a>
          </li>
        </Link>
        <Link href="/">
          <li>
            <Icons.ContactIcon />
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
  background: #3f51b5;
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
  background: #283593;
  overflow: hidden;
`
const NavHeaderProPic = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-top: 20px;
  margin-right: 10px;
  border: 2px solid #333;
  background: #999;
  float: right;
  overflow: hidden;
  svg {
    width: 54px;
    height: 54px;
    border-radius: 27px;
    margin: 3px auto;
    display: block;
  }
`
const NavHeaderInfo = styled.div`
  width: 150px;
  height: 70px;
  margin-top: 25px;
  direction: rtl;
  color: white;
  h5,
  h6 {
    margin: 5px;
  }
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
    color: white;
    line-height: 30px;
    margin-top: 10px;
    cursor: pointer;
    svg {
      width: 30px;
      height: 30px;
      padding-left: 10px;
      float: right;
    }
    a {
      width: 200px;
      height: 30px;
      display: block;
      line-height: 30px;
    }
  }
`
