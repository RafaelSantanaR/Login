const backendUrl = 'http:/localhost:3003/login'

const login = document.querySelector('#login')

cadastrar.addEventListener('submit', logincliente)

async function logincliente(event) {
    event.preventdefault()

    const email = document.querySelector('#loginemail').value;
    alert(email)
    const senha = document.querySelector('#loginsenha').value;
    alert(senha)

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
            document.querySelector('#login').reset()
        }else{
            console.error('ocorreu um erro ao tentar conectar-se com o servidor')
        }
    }catch(error){
        console.error('erro crtico',error)
    }
}