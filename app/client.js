import { getElement, dismissDefault } from './lib/html.js';
import chat from './lib/chat.js';

/** Global socket client instance. */
const socket = io();

/**
 * Message form.
 * @type {HTMLFormElement}
 */
const form = getElement('#form');

form.addEventListener('submit', sendHandler);

socket.on('chat message', receiveHandler);

/**
 * @typedef Message
 * @type {Object}
 * @property {string} text
 * @property {string} time
 */

/**
 * On receive message callback.
 * @param {Message} message
 */
function receiveHandler(message) {
  chat.renderMessage(message);
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
};
