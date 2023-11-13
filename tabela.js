const backendurl = 'http://localhost:3003/cliente'

async function buscardados(){
    try{
        const resposta = await fetch(backendurl)
        const dados = await resposta.json()
        console.log(dados)
        const tableclient = document.querySelector('#tablebody')
    
        dados.forEach(cliente =>{
            const line = document.createElement('tr')
            line.innerHTML=`
            <td>${cliente.email}</td>
            <td>${cliente.senha}</td>
            `
            tableclient.appendChild(line)
        })
    }
    catch(error){
        console.error('erro critico')
    }
}
buscardados()