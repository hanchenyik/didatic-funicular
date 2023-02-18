//promt new message
let user = window.prompt("Who are you?");
if (user == "lim") {
  document.getElementsByTagName("h1")[0].innerHTML = "Hi, Power User";
} else {
  document.getElementsByTagName("h1")[0].innerHTML = "Hi, " + user;
}
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>;
