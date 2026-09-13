/**
 * Reloads the web application and navigates directly to the Home page ('#/')
 * @param {Event} [e] Optional DOM click event
 */
export function reloadToHomePage(e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  
  const homeUrl = `${window.location.origin}${window.location.pathname}#/`;
  window.location.href = homeUrl;
  window.location.reload();
}
