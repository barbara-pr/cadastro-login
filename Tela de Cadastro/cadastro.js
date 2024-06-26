let btn = document.querySelector('#senha')
let btnConfirma = document.querySelector('#confirma')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirma = document.querySelector('#confirma')
let labelConfirma = document.querySelector('#labelConfirma')
let validConfirma = false

let msgError = document.querySelector('#msgError') 
let msgSuccess = document.querySelector('#msgSuccess') 

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome <strong>*Insira no mínimo 3 caracteres</strong>'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário <strong>*Insira no mínimo 5 caracteres</strong>'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 7) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha <strong>*Insira no mínimo 8 caracteres</strong>'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false 
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true 
    }
})

confirma.addEventListener('keyup', () => {
    if (senha.value != confirma.value) {
        labelConfirma.setAttribute('style', 'color: red')
        labelConfirma.innerHTML = 'Confirmar senha <strong>*As senhas não conferem</strong>'
        confirma.setAttribute('style', 'border-color: red')
        validConfirma = false
    } else {
        labelConfirma.setAttribute('style', 'color: green')
        labelConfirma.innerHTML = 'Confirmar senha'
        confirma.setAttribute('style', 'border-color: green')
        validConfirma = true
    }
})

function cadastrar() {
    if (validNome && validUsuario && validSenha && validConfirma) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]') // Ajuste na obtenção da lista

        listaUser.push({
            nomeCad: nome.value,
            userCad: usuario.value, 
            senhaCad: senha.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = '../index.html'
        }, 3000)
        //Vai esperar 3 segundos para executar o redirecionamento de tela.
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none') 
    }
}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirma.addEventListener('click', () => {
    let inputConfirma = document.querySelector('#confirma')

    if (inputConfirma.getAttribute('type') == 'password') {
        inputConfirma.setAttribute('type', 'text')
    } else {
        inputConfirma.setAttribute('type', 'password')
    }
})