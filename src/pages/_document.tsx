import Document, { Head, Html, Main, NextScript } from 'next/document';

import { updateThemeFromLocalStorage } from '../utils/documentHelper';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />

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
