import { Link } from "next/link"
import styled from "styled-components"
import { BarsIcon, NotifiIcon } from "./Icons"

export const Header = () => (
  <StyledHeader>
    <HeaderNotification>
      <NotifiIcon />
    </HeaderNotification>
    <HeaderBars onclick={NavController}>
      <BarsIcon />
    </HeaderBars>
  </StyledHeader>
)

/* - - - Page Components - - - */

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  background: #e040fb;
  text-align: center;
`
const HeaderNotification = styled.div`
  float: left;
  width: 50px;
  height: 50px;

  svg {
    margin: 15px auto;
  }
`
const HeaderBars = styled.div`
  float: right;
  width: 50px;
  height: 50px;

  svg {
    margin: 10px auto;
  }
`

/* - - - Page Functions - - - */

function NavController() {
  // $(this).on("click", function() {
  //   const mover = document.getElementById("main-navbar")
  //   mover.style.cssText = "right: 0px"
  // })
  console.log("Hi")
}
