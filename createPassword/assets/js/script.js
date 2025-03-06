(() => {
  const generatePasswordForm = document.querySelector('.form');
  const generate = document.querySelector('#generate');
  const inputPassword = document.querySelector('#password');
  const copyButton = document.querySelector('#copy');
  
  function copyPassword() {
    const password = document.getElementById("password").value;

    navigator.clipboard.writeText(password)
        .then(() => {
            if (password === '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Campo Vazio!',
                    text: 'Não há senha para copiar.',
                    confirmButtonColor: '#3085d6',
                    width: '300',
                    height: '100'
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Copiado!',
                    text: 'A senha foi copiada com sucesso.',
                    confirmButtonColor: '#3085d6',
                    width: '300',
                    height: '100'
                });
            }
        })
        .catch(err => {
            console.error("Erro ao copiar:", err);
        });
}


  function gerarSenha(uppercase, lowercase, numbers, symbols, length) {
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let allChars = "";
    let generatePassword = [];

    // Garantir que pelo menos um de cada tipo selecionado seja incluído
    if (uppercase) {
        generatePassword.push(letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)]);
        allChars += letrasMaiusculas;
    }
    if (lowercase) {
        generatePassword.push(letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)]);
        allChars += letrasMinusculas;
    }
    if (numbers) {
        generatePassword.push(numeros[Math.floor(Math.random() * numeros.length)]);
        allChars += numeros;
    }
    if (symbols) {
        generatePassword.push(simbolos[Math.floor(Math.random() * simbolos.length)]);
        allChars += simbolos;
    }

    // Preencher o restante da senha aleatoriamente
    for (let i = generatePassword.length; i < length; i++) {
        generatePassword.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    return generatePassword.join("");
  }

  copyButton.addEventListener('click', () => {
    copyPassword();
  })

  generatePasswordForm.addEventListener('submit', (e) => {
    e.preventDefault()
  });

  generate.addEventListener('click', () => {
    const uppercase = document.querySelector('#uppercase').checked;
    const lowercase = document.querySelector('#lowercase').checked;
    const numbers = document.querySelector('#numbers').checked;
    const symbols = document.querySelector('#symbols').checked;
    const passwordLength = document.querySelector('#length').value;

    if(!uppercase && !lowercase && !numbers && !symbols){
      inputPassword.placeholder = "Selecione alguma opção"
    }

    let passwordValue = gerarSenha(uppercase, lowercase, numbers, symbols, passwordLength);

    inputPassword.value = passwordValue;
  });
})();
