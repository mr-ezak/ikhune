import styled from "styled-components"
import Layout from "../components/nobles/MyLayout"
import Link from "next/link"
import { GoBackIcon } from "../components/nobles/Icons"

export default function Contact() {
  return (
    <Layout>
      <div>
        <ContactHeader>ارتباط با ما</ContactHeader>
        <Link href="/">
          <GobackBTN>
            <GoBackIcon />
            بازگشت
          </GobackBTN>
        </Link>
      </div>
    </Layout>
  )
}

const GobackBTN = styled.div`
  width: 90px;
  height: 30px;
  border-radius: 7px;
  border: 2px solid #000;
  font-size: 14px;
  direction: rtl;
  padding-right: 5px;
  line-height: 30px;
  color: black;
  margin-top: 7px;
  margin-left: 10px;
  float: left;
  cursor: pointer;
  svg {
    width: 35px;
    height: 35px;
    float: left;
    margin-top: 7px;
    margin-left: 7px;
  }
`
const ContactHeader = styled.h2`
  width: 150px;
  height: 50px;
  line-height: 50px;
  padding-right: 10px;
  direction: rtl;
  margin: 0;
  position: absolute;
  right: 0;
`
