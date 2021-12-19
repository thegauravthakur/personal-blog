import Document, { Html, Head, Main, NextScript } from 'next/document';
import { updateThemeFromLocalStorage } from '../page-components/document/utils';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/*todo add these*/}
          {/*<link rel='alternate icon' href='/favicon.ico' />*/}
          {/*<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ff8a01' />*/}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter&family=Source+Code+Pro&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: updateThemeFromLocalStorage,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
