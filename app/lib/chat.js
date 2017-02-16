import marked from 'marked';
import { getElement } from './html.js';

/**
 * Messages list.
 * @type {HTMLUListElement}
 */
const list = getElement('.chat > .messages');

/**
 * Message field.
 * @type {HTMLTextAreaElement}
 */
const field = getElement('.form > .message');

/**
 * @typedef Message
 * @type {Object}
 * @property {string} text
 * @property {string} time
 * @property {number} left
 */

/**
 * Get message.
 * @returns {Message}
 */
function getMessage() {
  let date = new Date();
  let text = field.textContent;

  field.textContent = '';
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

  item.classList.add('message');
  item.title = message.time;

  item.innerHTML = `
    <small class="time">${message.time}</small>
    ${marked.parse(message.text)}
  `;

  list.appendChild(item);
}

/**
 * Remove first message.
 */
function removeFirst() {
  let item = getElement('li:first-child', list);
  list.removeChild(item);
}

export default { getMessage, renderMessage, removeFirst };
