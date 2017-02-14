import { getElement, handleEvent } from './lib/html.js';

/**
 * Global socket client instance.
 */
const socket = io();


const list = getElement('#list');
const form = getElement('#form');
const text = getElement('#text');

form.addEventListener('submit', handleEvent(() => {
  io.emit('send', createMessage());
}));

io.on('receive', message => {
  list.appendChild(createItem(message));
});

/**
 * @typedef Message
 * @type {Object}
 * @property {string} text
 * @property {string} time
 */

/**
 * @returns {Message}
 */
function createMessage() {
  let date = new Date();

  return {
    text: text.value(),
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  };
}

/**
 * @param {Message} message
 * @returns {HTMLLIElement}
 */
function createItem(message) {
  let item = document.createElement('li');

  item.innerHTML = `
    <p>${message.text}</p>
    <small>${message.time}</small>
  `;

  return item;
}
