import { getElement, dismissDefault } from './lib/html.js';
import chat from './lib/chat.js';

/** Global socket client instance. */
const socket = io();

/**
 * Message form.
 * @type {HTMLFormElement}
 */
const form = getElement('.form');

const field = getElement('.form > .message');

field.addEventListener('keydown', event => {
  if (event.key === 'Enter' && !event.shiftKey)
    sendHandler(event);
  return;
});

form.addEventListener('submit', sendHandler);
socket.on('chat message', message => {
  chat.renderMessage(message);
  setTimeout(chat.removeFirst, 30 * 1000);
});

/**
 * @typedef Message
 * @type {Object}
 * @property {string} text
 * @property {string} time
 */

/**
 * On send message callback.
 * @param {Event} event
 * @returns {false}
 */
function sendHandler(event) {
  event.preventDefault();

  let message = chat.getMessage();
  let isValidMessage = message.text.trim() !== '';

  if (isValidMessage)
    socket.emit('chat message', message);
  return false;
}
