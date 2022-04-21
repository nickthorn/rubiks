function openNav() {
  document.querySelector('.section-banner__sidebar').style.width = '500px';
  document.querySelector('body').style.overflow = 'hidden';
}

function closeNav() {
  document.querySelector('.section-banner__sidebar').style.width = '0';
  document.querySelector('body').style.overflow = 'scroll';
}
document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("enquiry");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};