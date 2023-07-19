// alert("welcome");
const page = document.querySelector(".form-section");
const valid = document.querySelector(".valid");
const input = document.querySelector(".email-address");
const submit = document.querySelector(".submit");
const mail = document.querySelector(".mail");
const success = document.querySelector(".success-message");
const dismiss = document.querySelector(".dismiss");

submit.addEventListener("click", () => {
  if (input.value == "") {
    input.style.backgroundColor = " hsl(4, 87%, 78%)";
    input.style.border = "2px solid hsl(4, 100%, 67%)";
    valid.style.display = "inline-block";
  } else {
    page.style.display = "none";
    success.style.display = "flex";
    mail.textContent = input.value;
  }
});

dismiss.addEventListener("click", () => {
  page.style.display = "flex";
  success.style.display = "none";
});
