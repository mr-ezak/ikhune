import styled from "styled-components"
import Layout from "../components/nobles/MyLayout"
import Link from "next/link"

export default function Setup() {
  return (
    <Layout>
      <div>
        <p align="center">این صفحه پیکربندی است</p>
        <Link href="/">
          <GobackBTN>خانه</GobackBTN>
        </Link>
      </div>
    </Layout>
  )
}

const GobackBTN = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 7px;
  background-color: #0070f3;
  box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
  text-align: center;
  line-height: 40px;
  color: white;
  margin: 10px auto;
  cursor: pointer;
`
