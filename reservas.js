document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("personas");
  const mas = document.getElementById("mas");
  const menos = document.getElementById("menos");

  mas.addEventListener("click", () => {
    input.value = parseInt(input.value || 0) + 1;
  });

  menos.addEventListener("click", () => {
    const valor = parseInt(input.value || 0);
    if (valor > parseInt(input.min || 1)) {
      input.value = valor - 1;
    }
  });
});
