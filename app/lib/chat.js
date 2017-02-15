import { getElement } from './html.js';

/**
 * Messages list.
 * @type {HTMLUListElement}
 */
const list = getElement('#list');

/**
 * Message field.
 * @type {HTMLTextAreaElement}
 */
const field = getElement('#field');

/**
 * @typedef Message
 * @type {Object}
 * @property {string} text
 * @property {string} time
 */

/**
 * Get message.
 * @returns {Message}
 */
function getMessage() {
  let date = new Date();
  let text = field.value;

  field.value = '';
  /**
   * Put a zero if number lower than 10. Ex. 09, 02.
   * @param {number} num
   * @returns {string}
   */
  const zeroPad = num => num <= 9 ? '0' + num.toString() : num.toString();

  return {
    text,
    time: `${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}`
  };
}

/**
 * Render a message.
 * @param {Message} message
 */
function renderMessage(message) {
  let item = document.createElement('li');

  item.innerHTML = `
    <p>${message.text}</p>
    <small>${message.time}</small>
  `;

  list.appendChild(item);
}
function renderUser(user){
   let users = document.createElement('li');
   users.innerHTML = `
   <p>${users}</p>
   `;
}
export default { getMessage, renderMessage, renderUser };
