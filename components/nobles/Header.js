import React, { Component } from "react"
import { Link } from "next/link"
import styled from "styled-components"
import { BarsIcon, NotifiIcon } from "./Icons"
import { MainNavbar } from "./Navbar"

export class Header extends Component {
  state = {
    right: "-230px"
  }

  handleNavClick = () => {
    this.setState({
      right: "0"
    })
  }

  render = () => (
    <>
      <StyledHeader>
        <HeaderNotification>
          <NotifiIcon />
        </HeaderNotification>

        <HeaderBars onClick={this.handleNavClick}>
          <BarsIcon />
        </HeaderBars>
      </StyledHeader>
      <MainNavbar right={this.state.right} />
    </>
  )
}

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
