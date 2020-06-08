/**
 * Load a JavaScript library asynchronously
 * @param variableName a variable of the JavaScript library
 * @param url the url of the JavaScript library
 */
export default function asyncJSLoader(variableName: string, url: string): Promise<any> {
  if (!window || !document) {
    throw Error('asyncJSLoader can only be used in Browser.');
  }

  return new Promise((resolve, reject) => {
    if (!!window[variableName]) {
      resolve(window[variableName]);
    } else {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = url;
      script.onerror = reject;
      document.body.appendChild(script);
      script.onload = () => {
        !!window[variableName] && resolve(window[variableName]);
      };
    }
  });
}

export { 
  asyncJSLoader
}
