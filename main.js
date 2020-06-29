//Global Variables
let currentCategory = '';
const activities = [];
//document.querySelector
let main = document.querySelector('main');
let numberInputs = document.querySelector('.min-sec-div');
//Event Listeners
main.addEventListener('click', handleClick);
numberInputs.addEventListener('keydown', handleKeyDown);

//Functions
function handleClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('btn')) {
    selectCategory(e);
  }
  if (e.target.classList.contains('start-btn')) {
    startActivity();
  }
}

function selectCategory(e) {
  document
    .querySelectorAll('.btn')
    .forEach((ele) => ele.classList.remove(`${ele.value}-selected`));
  e.target.classList.add(`${e.target.value}-selected`);
  currentCategory = e.target.value;
}

function startActivity() {
  let minute = document.querySelector('.minute-input').value;
  let second = document.querySelector('.second-input').value;
  let task = document.querySelector('.task-input').value;

  if (minute && second && task) {
    activities.push(new Activity(currentCategory, task, minute, second));
  } else {
    console.log('here');
  }
}

function handleKeyDown(e) {
  if (e.keyCode === 69) {
    e.preventDefault();
  }
}
