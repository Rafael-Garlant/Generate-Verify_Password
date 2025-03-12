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


  function generatePasswordFunction(uppercase, lowercase, numbers, symbols, length) {
    const uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
    const numbersPassword = "0123456789";
    const symbolsPassword = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let allChars = "";
    let generatePassword = [];

    // Garantir que pelo menos um de cada tipo selecionado seja incluído
    if (uppercase) {
        generatePassword.push(uppercaseLetter[Math.floor(Math.random() * uppercaseLetter.length)]);
        allChars += uppercaseLetter;
    }
    if (lowercase) {
        generatePassword.push(lowercaseLetter[Math.floor(Math.random() * lowercaseLetter.length)]);
        allChars += lowercaseLetter;
    }
    if (numbers) {
        generatePassword.push(numbersPassword[Math.floor(Math.random() * numbersPassword.length)]);
        allChars += numbersPassword;
    }
    if (symbols) {
        generatePassword.push(symbolsPassword[Math.floor(Math.random() * symbolsPassword.length)]);
        allChars += symbolsPassword;
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

    let passwordValue = generatePasswordFunction(uppercase, lowercase, numbers, symbols, passwordLength);

    inputPassword.value = passwordValue;
  });
})();
