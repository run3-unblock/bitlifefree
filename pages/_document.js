// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Redirect any visit on the pages.dev host to your custom domain */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  if (
                    typeof window !== 'undefined' &&
                    window.location.hostname === 'bitlifeunblockedfree.pages.dev'
                  ) {
                    var dest = 'https://bitlifefree.com' +
                      window.location.pathname +
                      window.location.search +
                      window.location.hash;
                    window.location.replace(dest);
                  }
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
