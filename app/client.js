import { getElement, dismissDefault } from './lib/html.js';
import chat from './lib/chat.js';

/** Global socket client instance. */
const socket = io();

/**
 * Message form.
 * @type {HTMLFormElement}
 */
const form = getElement('.form');

const field = getElement('.message');

field.addEventListener('keydown', event => {
  if (event.key === 'Enter' && !event.shiftKey)
    sendHandler(event);
  return;
});

form.addEventListener('submit', sendHandler);
socket.on('chat message', message => chat.renderMessage(message));
socket.on('load messages', loadHandler);
socket.on('timeout message', () => chat.removeFirst());

/**
 * @typedef Message
 * @type {Object}
 * @property {string} text
 * @property {string} time
 */

/**
 * @param {Array.<Message>} messages
 */
function loadHandler(messages) {
  messages.forEach(message => {
    chat.renderMessage(message);
  });
}

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
