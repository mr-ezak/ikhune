import styled from "styled-components"
import Layout from "../components/nobles/MyLayout"
import Link from "next/link"
import { GoBackIcon } from "../components/nobles/Icons"
import { Component } from "react"
import { Formik } from "formik"
import { postData } from "../utils/main"

export default class Setup extends Component {
  state = {
    btnshow: "block",
    formshow: "60px",
    wifissid: "",
    wifipass: ""
  }

  handleAddBTN = () => {
    this.setState({
      btnshow: "none",
      formshow: "auto"
    })
  }

  handleCancelBTN = () => {
    this.setState({
      btnshow: "block",
      formshow: "60px"
    })
  }

  handleInputChange = value => {
    this.setState({
      wifissid: value
    })
    console.log(value)
  }

  handleSubmit = () => {
    alert(this.state.wifissid)
  }

  render = () => (
    <>
      <Layout>
        <SetupWrapper>
          <SetupHeader>پیکربندی</SetupHeader>
          <Link href="/">
            <GobackBTN>
              <GoBackIcon />
              بازگشت
            </GobackBTN>
          </Link>
          <SetupContainer formshow={this.state.formshow}>
            <SetupAdd btnshow={this.state.btnshow} onClick={this.handleAddBTN}>
              افزودن کلید جدید
            </SetupAdd>
            <Formik
              initialValues={{
                ssid: "",
                passcode: "",
                username: "",
                password: "",
                service: ""
              }}
              validate={values => {
                let errors = {}
                if (!values.email) {
                  errors.email = "Required"
                }
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true)

                postData("http://tarino.net/saeed/index.php?q=batman", {
                  q: "arrow"
                })
                  .then(data => console.log(JSON.stringify(data)))
                  .catch(error => console.error(error))

                setTimeout(() => {
                  setSubmitting(false)
                }, 400)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>تنظیمات ارتباطی</div>
                  <input
                    type="text"
                    name="ssid"
                    placeholder="SSID"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ssid}
                  />
                  <input
                    placeholder="Passcode"
                    name="passcode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passcode}
                  />
                  <div>تنظیمات کاربری</div>
                  <input
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  <input
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <div>نوع خدمت</div>
                  <select
                    name="service"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.service}
                  >
                    <option />
                    <option>مسخره بازی</option>
                    <option>خر حمالی</option>
                    <option>ضرب و شتم</option>
                  </select>
                  <SetupAddBTN type="submit" disabled={isSubmitting}>
                    ثبت
                  </SetupAddBTN>
                  <SetupCancelBTN onClick={this.handleCancelBTN}>
                    لغو
                  </SetupCancelBTN>
                </form>
              )}
            </Formik>
          </SetupContainer>
        </SetupWrapper>
      </Layout>
    </>
  )
}

const SetupWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`

const SetupHeader = styled.h2`
  width: 150px;
  height: 50px;
  line-height: 50px;
  padding-right: 10px;
  direction: rtl;
  margin: 0;
  float: right;
`

const GobackBTN = styled.div`
  width: 90px;
  height: 30px;
  border-radius: 7px;
  border: 2px solid #000;
  font-size: 14px;
  direction: rtl;
  padding-right: 5px;
  line-height: 31px;
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

const SetupContainer = styled.div`
  width: 100%;
  height: ${p => (p.formshow ? p.formshow : "60px")};
  min-height: 50px;
  margin-top: 70px;
  overflow: hidden;
  direction: rtl;
  transition: all 600ms;

  form {
    height: auto;
  }
  input {
    width: 200px;
    height: 30px;
    display: block;
    margin-right: 10px;
    margin-top: 3px;
    background: none;
    padding-right: 5px;
    border-radius: 3px;
    color: #333;
  }
  input::placeholder {
    color: #333;
  }

  select {
    width: 200px;
    height: 30px;
    display: block;
    margin-right: 10px;
    margin-top: 3px;
    background: none;
    padding-right: 5px;
    border-radius: 3px;
    color: #333;
  }

  div {
    margin-right: 10px;
    margin-top: 5px;
  }
`

const SetupAdd = styled.button`
  width: 150px;
  height: 40px;
  background-color: #0070f3;
  box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
  margin: 10px auto;
  border: none;
  display: ${d => (d.btnshow ? d.btnshow : "block")};
  border-radius: 3px;
  font-family: BYekan;
  font-size: 15px;
  transition: all 600ms;
`

const SetupAddBTN = styled.button`
  width: 90px;
  height: 30px;
  background-color: #0070f3;
  border-radius: 3px;
  border: none;
  margin-top: 20px !important;
  margin-right: 10px;
  text-align: center;
  line-height: 31px;
  color: white;
  float: right;
`

const SetupCancelBTN = styled.div`
  width: 90px;
  height: 30px;
  background-color: white;
  color: #0070f3;
  border-radius: 3px;
  border: 2px solid #0070f3;
  margin-right: 10px;
  margin-top: 20px !important;
  text-align: center;
  line-height: 31px;
  box-sizing: border-box;
  float: right;
`
