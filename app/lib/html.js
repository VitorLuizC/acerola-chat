/**
 * Get an element by CSS selector.
 * @param {string} selector
 * @param {HTMLElement|Document} parent
 * @returns {HTMLElement}
 */
function getElement(selector, parent = document) {
  let element = parent.querySelector(selector);
  if (!element)
    throw new Error(`Element "${selector}" not found.`);
  return element;
}

/**
 * Get elements by CSS selector.
 * @param {string} selectors
 * @param {HTMLElement|Document} parent
 * @returns {Array.<HTMLElement>}
 */
function getElements(selectors, parent = document) {
  let elements = parent.querySelectorAll(selectors);
  if (elements.length === 0)
    throw new Error(`Elements "${selectors}" not found.`);
  return Array.from(elements);
}

export { getElement, getElements };
