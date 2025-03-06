function verifyPassword(){
  const verifyPasswordForm = document.querySelector(".form");
  const character = document.querySelector('#character');
  const lowerCase = document.querySelector('#lower-case');
  const upperCase = document.querySelector('#upper-case');
  const specialCharacter = document.querySelector('#special-character');
  const number = document.querySelector('#number');
  const res = document.querySelector('.res');

  // Colocar função do evento aqui.

  verifyPasswordForm.addEventListener("submit", function(event) {
    event.preventDefault();
  });

  verifyPasswordForm.addEventListener('input', ()=>{

    const password = document.querySelector(".password").value;

    function testPassword(){
      const hasMinLength = password.length >= 8;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const hasNumber = /[0-9]/.test(password);

      character.checked = hasMinLength;
      upperCase.checked = hasUpperCase;
      lowerCase.checked = hasLowerCase;
      specialCharacter.checked = hasSpecialCharacter;
      number.checked = hasNumber;

      if(character.checked &&
        upperCase.checked &&
        lowerCase.checked &&
        specialCharacter.checked &&
        number.checked){

        res.innerHTML = '<p>Senha Válida.</p>'
      } else{

        res.innerHTML = '<p>Senha Inválida.</p>'
      }
    }

    testPassword()
    
  })
}

verifyPassword()
