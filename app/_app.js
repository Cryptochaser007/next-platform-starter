import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      var _kiq = _kiq || [];
      (function(){
        setTimeout(function(){
          var d = document, f = d.getElementsByTagName('script')[0], s = d.createElement('script'); s.type = 'text/javascript';
          s.async = true; s.src = 'https://cl.qualaroo.com/ki.js/82001/jnx.js'; f.parentNode.insertBefore(s, f);
        }, 1);
      })();
    `;
    document.head.appendChild(script);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
