document.addEventListener("DOMContentLoaded", () => {
  const btnEnviar = document.getElementById("enviar");
  const btnBorrar = document.getElementById("borrar");
  const camposInput = document.querySelectorAll("input");

  if (btnEnviar) {
    btnEnviar.addEventListener("click", () => {
      console.log("enviado");
    });
  }

  if (btnBorrar) {
    btnBorrar.addEventListener("click", () => {
      camposInput.forEach((campo) => {
        campo.value = "";
      });
    });
  }
});
