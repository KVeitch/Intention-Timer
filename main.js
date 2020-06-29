//Global Variables
let currentCategory = ""

//document.querySelector
let main = document.querySelector('main');

//Event Listeners
main.addEventListener("click", handleClick)


//Functions
function handleClick(e){
  e.preventDefault()
  if(e.target.classList.contains('btn')){
    selectCategory(e)
  }

  if(e.target.classList.contains('new-activity-btn')){
    
  }
}

function selectCategory (e){
  document.querySelectorAll('.btn').forEach(ele=>ele.classList.remove(`${ele.value}-selected`))
  e.target.classList.add(`${e.target.value}-selected`)
  currentCategory = e.target.value
}