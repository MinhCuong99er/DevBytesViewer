import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { Helmet, HelmetData } from 'react-helmet'

interface MyDocumentProps {
  helmet: HelmetData
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    asPath: any
    pathname: any
    query: any
    helmet: HelmetData
    html: string
    head?: JSX.Element[]
  }> {
    const { ...args } = ctx
    const documentProps = await super.getInitialProps(ctx)
    const { asPath, pathname, query } = args
    return {
      ...documentProps,
      asPath,
      pathname,
      query,
      helmet: Helmet.renderStatic(),
    }
  }

  // should render on <html>
  get helmetHtmlAttrComponents(): any {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents(): any {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents(): any {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map((el) => this.props.helmet[el].toComponent())
  }

  render(): JSX.Element {
    return (
      <Html {...this.helmetHtmlAttrComponents}>
        <Head>{this.helmetHeadComponents}</Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
