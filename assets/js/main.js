let email = document.querySelector('.email')
let password = document.querySelector('.password')
let error = document.querySelector('.erro')
let errorPassword = document.querySelector('.erro-password')
let btnLogin = document.querySelector('.btn-login')
let eyes = document.querySelector('.eyes')
let noeyes = document.querySelector('.noeyes')

function checkForm(){

  btnLogin.addEventListener('click',(e) => {
    e.preventDefault();

    error.style.display = 'none'
    errorPassword.style.display = 'none'

    if(email.value === ''){
      error.style.display = 'block'
      error.innerHTML = 'Campo vazio ou email inválido'
      error.style.color = ' #e26060' 
    }
    if(password.value === '' || password.value.length <= 3  || password.value.length >= 20){
      errorPassword.style.display = 'block'
      errorPassword.innerHTML = 'A senha precisa ter entre 3 e 20 caracteres'
      errorPassword.style.color = ' #e26060'
    }

  })
}

function displayingPassword(){
  eyes.addEventListener('click', (e) => {
    eyes.style.display = 'none'
     password.type = 'text'
  })

  noeyes.addEventListener('click',(e) => {
    eyes.style.display = 'block'
    password.type = 'password'
  })
}

displayingPassword()
checkForm()
