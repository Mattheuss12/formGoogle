document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;

    var formData = {
      qtdMesa: document.querySelector('input[name="qtdMesa"]:checked').value,
      garcom: document.getElementById("garcom").value,
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbybHcMinUu39mS3dEAk46W78U0QOcSTKo5qkQbeSFok6H2AgPolX5LE6T1v6qTYLVYCEg/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Formulário enviado com sucesso!");
          document.getElementById("reservationForm").reset();
        } else {
          throw new Error(
            "Erro ao enviar o formulário. Por favor, tente novamente."
          );
        }
      })
      .then(() => {
        submitBtn.disabled = false;
      })
      .catch((error) => {
        console.error("Erro ao enviar formulário:", error);
        alert(
          "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente."
        );
        submitBtn.disabled = false;
      });
  });
