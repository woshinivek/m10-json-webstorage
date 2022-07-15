import debounce from 'lodash.debounce';
import '../css/common.css';
import '../css/feedback-form.css';

// --------------------------------------------------------
// --------------------------------------------------------

// const FEEDBACK_MESSAGE = 'feedBackMessage';

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textArea: document.querySelector('.js-feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textArea.addEventListener('input', debounce(onTextAreaInput, 500));

// populateMessageOutput();

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   localStorage.removeItem(FEEDBACK_MESSAGE);
//   evt.currentTarget.reset();
// }

// function onTextAreaInput(evt) {
//   console.log('onTextAreaInput ~ currentTarget', evt.currentTarget);

//   console.log('onTextAreaInput ~ target', evt.target);
//   const message = evt.target.value;

//   localStorage.setItem(FEEDBACK_MESSAGE, message);
// }

// function populateMessageOutput(evt) {
//   const feedBackTempMessage = localStorage.getItem(FEEDBACK_MESSAGE);

//   if (feedBackTempMessage) {
//     refs.textArea.value = feedBackTempMessage;
//   }
// }

// --------------------------------------------------------
// --------------------------------------------------------

const FORM_DATA = {};

const refs = {
  form: document.querySelector('.js-feedback-form'),
  inputName: document.querySelector('.js-feedback-form input'),
  textArea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', debounce(onInputsChange, 200));

populateMessageOutput();

function onInputsChange(evt) {
  FORM_DATA[evt.target.name] = evt.target.value;
  localStorage.setItem('messageData', JSON.stringify(FORM_DATA));

  console.log(FORM_DATA);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  localStorage.removeItem('messageData');
  evt.currentTarget.reset();
}

function populateMessageOutput(evt) {
  const parsedFormData = JSON.parse(localStorage.getItem('messageData'));

  if (parsedFormData) {
    refs.inputName.value = parsedFormData.name;
    refs.textArea.value = parsedFormData.message;
  }
}

// --------------------------------------------------------
// --------------------------------------------------------
