var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener(
  "submit",
  function (event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
      output = output + entry[0] + entry[1] + "\r";
    }
    log.innerText = "你的興趣為:" + output;
    event.preventDefault();
  },
  false
);