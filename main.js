const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");

const searchButtons = document.querySelectorAll('.search-buttons button ');


document.addEventListener("click", function (event) {
  if (dropdownButton.contains(event.target)) {
    return;
  }

  if (dropdownMenu.contains(event.target) === false) {
    dropdownMenu.style.display = "none";
    dropdownMenu.dataset.state = "closed";
  }
});

dropdownButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (dropdownMenu.dataset.state === "closed") {
    dropdownMenu.style.display = "block";
    dropdownMenu.dataset.state = "open";
  } else {
    dropdownMenu.style.display = "none";
    dropdownMenu.dataset.state = "closed";
  }
});

searchButtons.forEach(button => {
  button.addEventListener('click', function(event){
    searchButtons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
  })
})