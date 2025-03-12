function verifyPassword(){
  const verifyPasswordForm = document.querySelector(".form");
  const character = document.querySelector('#character');
  const lowerCase = document.querySelector('#lower-case');
  const upperCase = document.querySelector('#upper-case');
  const specialCharacter = document.querySelector('#special-character');
  const number = document.querySelector('#number');
  const res = document.querySelector('.res');
  res.innerHTML = `<p class="blank">Digite a sua senha.</p>`;

  function testPassword(){
    const password = document.querySelector(".password").value;
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const passwordChecked = [];

    character.checked = hasMinLength;
    upperCase.checked = hasUpperCase;
    lowerCase.checked = hasLowerCase;
    specialCharacter.checked = hasSpecialCharacter;
    number.checked = hasNumber;

    if(number.checked) passwordChecked.push(number);
    if(character.checked) passwordChecked.push(character);
    if(upperCase.checked) passwordChecked.push(upperCase);
    if(lowerCase.checked) passwordChecked.push(lowerCase);
    if(specialCharacter.checked) passwordChecked.push(specialCharacter);

    for(let i in passwordChecked){
      if(i >= 0 && i <= 2) res.innerHTML = `<p class="weak">Senha fraca</p>`;
      if(i >= 2 && i <= 3) res.innerHTML = `<p class="medium">Senha média</p>`;
      if(i >= 4) res.innerHTML = `<p class="strong">Senha forte</p>`;
    }

  }

  verifyPasswordForm.addEventListener("submit", function(event) {
    event.preventDefault();
  });

  verifyPasswordForm.addEventListener('input', ()=>{
    testPassword()
  })
}

verifyPassword()
