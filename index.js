//Login Animation--
var formLogin = document.querySelector("#login")
var formCadastro = document.querySelector("#cadastro")
var btnColor = document.querySelector(".btnColor")

document.querySelector("#btnLogin").addEventListener("click", () => {
    formLogin.style.left = "25px"
    formCadastro.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector("#btnCadastro").addEventListener("click", () => {
    formLogin.style.left = "-450px"
    formCadastro.style.left = "25px"
    btnColor.style.left = "110px"
})

//Consume API--

//CADASTRO


const backendUrl = 'http:localhost:3003/cliente'

const cadastrar = document.querySelector('#cadastro')

cadastrar.addEventListener('submit',cadastrarCliente)

async function cadastrarCliente(event){
    
    event.preventDefault()

    const email = document.querySelector('#email').value;
    alert(email)
    const senha = document.querySelector('#senha').value;
    alert(senha)

    const cliente = {
        email: email,
        senha: senha
    };

    console.log(cliente);

    try{
        const conectar = await fetch(
            backendUrl,{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cliente)
            }
        )
        if(conectar.ok){
            document.querySelector('#cadadstro').reset()
        }else{
            console.error('ocorreu um erro ao tentar conectar-se com o servidor')
        }
    }catch(error){
        console.error('erro crtico',error)
    }
};
