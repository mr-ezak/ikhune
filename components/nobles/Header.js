import { Link } from "next/link"
import styled from "styled-components"
import { BarsIcon, NotifiIcon } from "./Icons"

export const Header = () => (
  <StyledHeader>
    <HeaderNotification>
      <NotifiIcon />
    </HeaderNotification>
    <HeaderBars>
      <BarsIcon />
    </HeaderBars>
  </StyledHeader>
)

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
    margin: 10px auto;
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
