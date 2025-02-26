const form = document.querySelector('.form');
const generate = document.querySelector('#generate');
const inputPassword = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const uppercase = document.querySelector('#uppercase').checked;
  const lowercase = document.querySelector('#lowercase').checked;
  const numbers = document.querySelector('#numbers').checked;
  const symbols = document.querySelector('#symbols').checked;
  const passwordLength = document.querySelector('#length').value;

  generate.addEventListener('click', () => {
    if(!uppercase && !lowercase && !numbers && !symbols){
      inputPassword.placeholder = "Selecione alguma opção"
    }

    inputPassword.value = createPassword();
  });

  function createPassword(){
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}<>?/";

    const getRandomChar = (chars) => chars[Math.floor(Math.random() * chars.length)];

    let password = '';
    let availableChars = '';

    if (uppercase) availableChars += uppercaseChars;
    if (lowercase) availableChars += lowercaseChars;
    if (numbers) availableChars += numberChars;
    if (symbols) availableChars += symbolChars;

    if (availableChars.length === 0) return '';

    for (let i = 0; i < passwordLength; i++) {
      password += getRandomChar(availableChars);
    }

    return password;
  }

});
