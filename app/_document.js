// src/app/_document.js

import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect } from 'react';

function Document() {
  return (
    <Html>
      <Head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          var _kiq = _kiq || [];
          (function(){
            setTimeout(function(){
              var d = document, f = d.getElementsByTagName('script')[0], s = d.createElement('script'); 
              s.type = 'text/javascript';
              s.async = true; 
              s.src = 'https://cl.qualaroo.com/ki.js/82001/jnx.js'; 
              f.parentNode.insertBefore(s, f);
            }, 1);
          })();
        `}}></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
