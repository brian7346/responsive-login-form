const inputs = document.querySelectorAll(".input");

function handleFocus() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function handleBlur() {
  let parent = this.parentNode.parentNode;

  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach(input => {
  input.addEventListener("focus", handleFocus);
  input.addEventListener("blur", handleBlur);
});
