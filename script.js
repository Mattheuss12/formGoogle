document.getElementById("reservationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;

  var formData = {
    name: document.getElementById("name").value,
    firstTime: document.querySelector('input[name="firstTime"]:checked').value,
    preference: document.getElementById("preference").value,
    avaliation: document.getElementById("avaliation").value,
    dessert: document.getElementById("dessert").value,
    contact: document.getElementById("contact").value
  };

  fetch("https://script.google.com/macros/s/AKfycbwgbvzRH8lbYf1pteTs0mbY8l_NVEZ3918K-qBRzhbAd88Y-UBdX9ZRaLc_S5rTwMtOgQ/exec", {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        var popup = document.getElementById('popup');
        popup.style.display = 'block';

        document.querySelector('.close-btn').addEventListener('click', function() {
          popup.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
          if (event.target == popup) {
            popup.style.display = 'none';
          }
        });

        document.getElementById("reservationForm").reset();
      } else {
        throw new Error("Erro ao enviar o formulário. Por favor, tente novamente.");
      }
    })
    .then(() => {
      submitBtn.disabled = false;
    })
    .catch((error) => {
      console.error("Erro ao enviar formulário:", error);
      alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.");
      submitBtn.disabled = false;
    });
});
