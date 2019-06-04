import Document, { Html, Head, Main, NextScript } from "next/document"
import link from "next/dist/client/link"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`body { margin: 0; padding:0; box-sizing: border-box; }`}</style>
          <link rel="stylesheet" href="static/fonts/BYekan/font.css" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
