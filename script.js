const input = document.querySelector(".input");
const button = document.querySelector(".submit");
const ul = document.querySelector(".list-ul");

const list = ["qwere", "aslkjdf", "asjkldf", "kaso;df"];
let inputValue = "";

showList(list);

input.addEventListener("keyup", (e) => {
  inputValue = e.target.value;

  if (inputValue.trim().length) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

button.addEventListener("click", () => {
  if (inputValue.trim().length) {
    list.push(inputValue);

    ul.innerHTML += `<li>${inputValue} <span class='delete-task'><i class="fa-solid fa-trash"></i></span> </li>`;

    input.value = "";
    inputValue = "";
  }

  button.disabled = true;
});

const deleteButtons = document.querySelectorAll("li");

deleteButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    console.log(index);
    console.log(list.splice(index, 1));

    showList(list.splice(index, 1));
  });
});

console.log("deleteButtons", deleteButtons);

function showList(list) {
  ul.innerHTML = "";

  if (list.length) {
    list?.map((el) => {
      return (ul.innerHTML += `<li>${el} <span class='delete-task'><i class="fa-solid fa-trash"></i></span> </li>`);
    });
  } else {
    return (ul.innerHTML = "");
  }
}
