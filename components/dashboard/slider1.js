import React, { Component } from "react"
import styled from "styled-components"

export class Slider1 extends Component {
  state = {}

  render = () => (
    <SliderWrapper>
      <SliderTitle>تازه های ما</SliderTitle>
      <SliderBody />
    </SliderWrapper>
  )
}

/* - - - Page Components - - - */

const SliderWrapper = styled.div`
  width: 100%;
  height: 200px;
  background: #ccc;
`
const SliderTitle = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
`
const SliderBody = styled.div`
  width: 100%;
  height: 160px;
  background: #333;
`
