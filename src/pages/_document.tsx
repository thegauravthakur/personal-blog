import Document, { Head, Html, Main, NextScript } from 'next/document';

import { updateThemeFromLocalStorage } from '../utils/documentHelper';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        href='https://fonts.googleapis.com'
                        rel='preconnect'
                    />

                    <link
                        crossOrigin='true'
                        href='https://fonts.gstatic.com'
                        rel='preconnect'
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
