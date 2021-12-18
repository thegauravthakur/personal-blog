import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
              __html: `
                   (function () {
            // Change these if you use something different in your hook.
            var storageKey = 'theme';

            function setClassOnDocumentBody(darkMode) {
              document.body.dataset.theme = darkMode ? 'dark' : 'light';
            }

            var preferDarkQuery = '(prefers-color-scheme: dark)';
            var mql = window.matchMedia(preferDarkQuery);
            var supportsColorSchemeQuery = mql.media === preferDarkQuery;
            var localStorageTheme = null;
            try {
              localStorageTheme = localStorage.getItem(storageKey);
            } catch (err) {}
            var localStorageExists = localStorageTheme !== null;

            // Determine the source of truth
            if (localStorageExists) {
              // source of truth from localStorage
              setClassOnDocumentBody(localStorageTheme === 'dark');
            } else if (supportsColorSchemeQuery) {
              // source of truth from system
              setClassOnDocumentBody(mql.matches);
              localStorage.setItem(storageKey, mql.matches);
            } else {
              // source of truth from document.body
              var isDarkMode = document.body.classList.contains(classNameDark);
              localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
            }
          })();
                            `,
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
