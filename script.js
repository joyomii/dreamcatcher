const myTextarea = document.getElementById("myTextarea");

const ulListContainer = document.getElementById("list-container");

function addTask() {
  if (myTextarea.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = myTextarea.value;
    ulListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  myTextarea.value = "";
  saveData();
}

ulListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", ulListContainer.innerHTML);
}

function showTask() {
  ulListContainer.innerHTML = localStorage.getItem("data");
}

showTask();
