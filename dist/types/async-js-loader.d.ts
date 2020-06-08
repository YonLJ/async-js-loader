/**
 * Load a JavaScript library asynchronously
 * @param variableName a variable of the JavaScript library
 * @param url the url of the JavaScript library
 */
declare function asyncJSLoader(variableName: string, url: string): Promise<any>;
export default asyncJSLoader;
export { asyncJSLoader };
