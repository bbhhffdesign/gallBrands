const inputEmail = document.getElementById("index-email");
const checkboxEmail = document.getElementById("checkboxEmail");
const formIndex = document.getElementById("formIndex");
const emailSubmit = document.getElementById("emailSubmit");

const toggleCheck = function (btn, chck){
  console.log("aaaaaa");
  
  chck.checked ? btn.disabled = false : btn.disabled = true; 
  
}


checkboxEmail.addEventListener("change",() =>{
  return checkboxEmail.checked ? emailSubmit.disabled = false : emailSubmit.disabled = true; 
})


document.getElementById("formIndex").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailIndex = String(document.getElementById("index-email").value);

  if (emailIndex === "" || !emailIndex.includes("@")) {
    gsap.to(formIndex, { x: "+=7", yoyo: true, repeat: 3, duration: 0.03 });
    inputEmail.value = "";
    inputEmail.placeholder = "Invalido";
    setTimeout(() => {
      inputEmail.placeholder = "example@gmail.com";
    }, 1000);
    return false;
  } else {

    var formData = new FormData(this);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    var formDataString = keyValuePairs.join("&");

    fetch(
      "https://script.google.com/macros/s/AKfycbzaaxybdgxkb6niBx3wBaW_l9rSs39WBriLzbEA3SrWd43HvkDszNfGyz4nnBHAoXT8/exec",
      {
        redirect: "follow",
        method: "POST",
        body: formDataString,
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    )
      .then(function (response) {
        if (response) {
          return response;
        } else {
          throw new Error("Failed to submit the form.");
        }
      })
      .then(function (data) {
        document.getElementById("emailSubmit").disabled = true;
        document.getElementById("formIndex").reset();
      })
      .catch(function (error) {
        console.error(error);
      });

      inputEmail.value = "¡Gracias!";
      inputEmail.placeholder = "Ya dejaste tu mail";
      inputEmail.disabled = true;
  }
});
