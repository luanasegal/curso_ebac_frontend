document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('form-comparacao');
      const campoA = document.getElementById('campoA');
      const campoB = document.getElementById('campoB');
      const successMessage = document.querySelector('.success-message');
      const errorMessageA = document.querySelector('#campoA + .error-message');
      const errorMessageB = document.querySelector('#campoB + .error-message');

      function validarCampos() {
            return campoB.value > campoA.value;
      }

      form.addEventListener('submit', function (e) {
            e.preventDefault();

            successMessage.style.display = 'none';
            errorMessageA.style.display = 'none';
            errorMessageB.style.display = 'none';

            if (campoA.validity.valid && campoB.validity.valid) {
                  const formEValido = validarCampos();

                  if (formEValido) {
                        successMessage.textContent = `Formulário válido, pois o valor do campo B, ${campoB.value}, é maior que o valor do campo A, ${campoA.value}`;
                        successMessage.style.display = 'block';

                        campoA.value = '';
                        campoB.value = '';
                  } else {
                        if (campoA.value == campoB.value) {
                              errorMessageB.textContent = "Os valores dos campos A e B são iguais. Preencha com valores diferentes.";
                        } else {
                              errorMessageB.textContent = "O valor do campo B deve ser maior que o valor do campo A. Preencha corretamente.";
                        }
                        errorMessageB.style.display = 'block';
                  }
            } else {
                  errorMessageA.style.display = campoA.validity.valueMissing ? 'block' : 'none';
                  errorMessageB.style.display = campoB.validity.valueMissing ? 'block' : 'none';
            }
      });
});

console.log(form);