document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    var formData = new FormData(this);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    var formDataString = keyValuePairs.join("&");

    fetch(
      "https://script.google.com/macros/s/AKfycbwqmZwoNLKua8ZCsrCwYru-_wDMH45NipiJYewfxt1Uh1Rii7lCfCTdV6rQ3Q6xtyrY8g/exec",
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
        document.getElementById("input_e_next").disabled = false;
        document.getElementById("form").reset();
      })
      .catch(function (error) {
        console.error(error);
      });
  });
