function verifyPassword(){
  const form = document.querySelector(".form");
  const character = document.querySelector('#character');
  const lowerCase = document.querySelector('#lower-case');
  const upperCase = document.querySelector('#upper-case');
  const specialCharacter = document.querySelector('#special-character');
  const number = document.querySelector('#number');
  const res = document.querySelector('.res');

  form.addEventListener("submit", function(event) {
    event.preventDefault();
  });

  form.addEventListener('input', ()=>{

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


/* <label for=""><input type="checkbox" name="" id="character"> 8 caracteres</label>
<label for=""><input type="checkbox" name="" id="lower-case"> Uma letra minúscula</label>
<label for=""><input type="checkbox" name="" id="upper-case"> Uma letra maiúscula</label>
<label for=""><input type="checkbox" name="" id="number"> Um número</label>
<label for=""><input type="checkbox" name="" id="especial-character"> Um caractere especial (!@#$%^&*(),.?)</label> */