import debounce from 'lodash.debounce';
import '../css/common.css';
import '../css/feedback-form.css';

// const STORAGE_KEY = 'feedback';

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textArea: document.querySelector('.js-feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// // refs.textArea.addEventListener('input', onTextAreaInput);
// refs.textArea.addEventListener('input', debounce(onTextAreaInput, 300));

// populateMessageOutput();

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextAreaInput(evt) {
//   const message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateMessageOutput() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     refs.textArea.value = savedMessage;
//   }
// }

// --------------------------------------------------------
// --------------------------------------------------------

const FEEDBACK_MESSAGE = 'feedBackMessage';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textArea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textArea.addEventListener('input', onTextAreaInput);

populateMessageOutput();

function onFormSubmit(evt) {
  evt.preventDefault();
  localStorage.clear();
  evt.currentTarget.reset();
}

function onTextAreaInput(evt) {
  const message = evt.currentTarget.value;

  localStorage.setItem(FEEDBACK_MESSAGE, message);
}

function populateMessageOutput(evt) {
  const feedBackTempMessage = localStorage.getItem(FEEDBACK_MESSAGE);

  if (feedBackTempMessage) {
    refs.textArea.value = feedBackTempMessage;
  }
}
