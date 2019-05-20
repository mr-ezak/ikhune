import Link from "next/link"
import styled from "styled-components"

export const Header = () => (
  <StyledHeader>
    <HeaderNotification />
  </StyledHeader>
)

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  background: gray;
  text-align: center;
`
const HeaderNotification = styled.div`
  float: left;
  width: 50px;
  height: 50px;
  background: red;
`
