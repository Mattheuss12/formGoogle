document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    var formData = {
      qtdMesa: document.querySelector('input[name="qtdMesa"]:checked').value,
      garcom: document.getElementById("garcom").value,
    };

    
    fetch(
      "https://script.google.com/macros/s/AKfycbwv9a-DCJGid54Hd6ZBUvXT3meIppPn6CSJrOOHivSxviZsru_zZIzHNgRXqX8daVMD7w/exec",
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
      .catch((error) => {
        console.error("Erro ao enviar formulário:", error);
        alert(
          "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente."
        );
      });
  });
