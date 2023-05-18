const addFileActionElem = document.getElementById("add-file-action");
const appendFileForm = document.getElementById("append-file-form");
// add file action
addFileActionElem.addEventListener("click", () => {
  let checkInput = appendFileForm.querySelector("form");
  if (!checkInput) {
    appendFileForm.insertAdjacentHTML("afterbegin", AddFileHtml(""));
    document
      .getElementById("add-file-form")
      .addEventListener("submit", fileAddHandel);
  } else {
    checkInput.querySelector("input").value = "";
    document
      .getElementById("add-file-form")
      .addEventListener("submit", fileAddHandel);
  }
});

function fileAddHandel(event) {
  event.preventDefault();
  let getValue = event.target[0].value;
  event.target.remove();
  console.log("event", getValue);
}

// file appned

// edit file name

function renameFile(el) {
  let oldEL = el;
  console.log("oldEL", oldEL);
  let getFileName = oldEL.querySelector("[data-file-name]").dataset.fileName;
  el.insertAdjacentHTML("afterend", AddFileHtml(getFileName));
  el.remove();
  console.log("el", el);
}

// tab click action

function tabActiveHandel(el) {
  el.classList.add("active");
  let getId = document.querySelector(`${el.dataset.bsTarget}`);
  getId.classList.add("active");

  console.log("el, ", getId);
}
