const escolher_equipe = document.querySelector(".escolher-equipes")
const equipeUm = document.querySelector("#nomeEquipeUm")
const equipeDois = document.querySelector("#nomeEquipeDois")
const btnEnviarNome = document.querySelector("#enviarNome")
const conteiner = document.querySelector(".conteiner-full")
const passa_repassa = document.querySelector(".passa-repassa")
const start = document.querySelector(".start")
const comecar = document . querySelector("#comecar")
const respostas = document.querySelector(".bottom")
const topo = document.querySelector(".top")


let mudarTela = false

conteiner.style.display ="none"
passa_repassa.style.display ="none"
respostas.style.display="none"



btnEnviarNome.addEventListener("click",(e)=>{
    e.preventDefault()
    if(equipeUm.value==""&& equipeDois.value==""){
        alert("digite os nomes dos times")
    }else{
        pegar_nome()
    }
    

    
})


/*colocar os nomes dos times no header*/
const timeUm = document.querySelector("#timeUm")
const timeDois = document.querySelector("#timeDois")
const equipeStart = document.querySelector("#equipeResponde")
const mudar_nome_header = function(nomeUm,nomeDois){
    timeUm.innerText =nomeUm
    timeDois.innerText = nomeDois
    equipeStart.innerText = ` ${nomeUm} responde`
}

/*pegar os nomes e mudar tela*/
const pegar_nome = function(){
    if(equipeUm!=null && equipeDois!=null){
        const nomeEquipeUm = equipeUm.value
        const nomeEquipeDois = equipeDois.value
        mudar_nome_header(nomeEquipeUm,nomeEquipeDois)
    }
    mudarTela = true
    if(mudarTela){
        escolher_equipe.style.display="none"
        start.style.display = "flex"
        /*conteiner.style.display ="flex*/
        /*passa_repassa.style.display = "flex"*/
    }
}
//começar 
const mudar_tela_perguntas = function(){
    if(mudarTela){
        conteiner.style.display ="flex"
        start.style.display= "none"
        topo.style.height ="100%"

    }
}
comecar.addEventListener("click",()=>{
    mudarTela = true
    mudar_tela_perguntas()
    analise()
    
    
})


//ver quem clicou primeiro

function analise (){
        document.body.addEventListener("keyup",(e)=>{
        console.log(e.code)
            
    })
}
















