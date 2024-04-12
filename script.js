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
const equipeComeca = document.querySelector(".equipes")
const perg = document.querySelector("#question")
const resps = document.querySelector(".respostas")
const btnAendB = document.querySelector(".btns")
let indexQuestions = 0


const equipeStart = document.querySelector("#equipeResponde")
const secEquipeStar = document.querySelector("#secResponde")

let mudarTela = false

conteiner.style.display ="none"
passa_repassa.style.display ="none"
respostas.style.display="none"
equipeComeca.style.display="none"
equipeStart.style.display ="none"
secEquipeStar.style.display ="none"


const questions = [{
    question:"Quais são algumas das mudanças físicas comuns que ocorrem durante a meia-idade?",
    answers:[{text: "Perda de cabelo",correct:false},
    {text: "Melhora na visão de perto",correct:false},{text: "Aumento da densidade óssea",correct:false},{text: " Redução da capacidade auditiva",correct:true}]
},{
    question:"Como as questões de saúde mudam ou se tornam mais relevantes durante a meia-idade?",
    answers:[{text: "Aumento do risco de doenças cardíacas",correct:false},
    {text: "Diminuição do risco de osteoporoses",correct:false},{text: " Melhora da função pulmonar",correct:false},{text: "Redução do risco de diabetes tipo 2",correct:true}]
},{
    question:"Quais são alguns dos desafios emocionais enfrentados por indivíduos durante a meia-idade?",
    answers:[{text: "Insegurança financeira",correct:false},
    {text: "Crescimento dos filhos",correct:false},{text: "  Nascimento dos netos",correct:false},{text: "Reflexão sobre realizações pessoais",correct:true}]
}]

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

const mudar_nome_header = function(nomeUm,nomeDois){
    timeUm.innerText =nomeUm
    timeDois.innerText = nomeDois
    
}

/*pegar os nomes e mudar tela*/
const pegar_nome = function(){
    if(equipeUm!=null && equipeDois!=null){
        const nomeEquipeUm = equipeUm.value
        const nomeEquipeDois = equipeDois.value
        mudar_nome_header(nomeEquipeUm,nomeEquipeDois)
        nome_comeca(nomeEquipeUm)
        sec_comeca(nomeEquipeDois)
        
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
comecar.addEventListener("click",(e)=>{
    mudarTela = true
    mudar_tela_perguntas()
    analise()
    //e.stopPropagation()
    
})


//adicionar perguntas
nextQuestion()
function nextQuestion(){
    while(resps.firstChild){
        resps.removeChild(resps.firstChild)
    }
    perg.textContent = questions[indexQuestions].question
    questions[indexQuestions].answers.forEach(answers =>{
        const newbutton = document.createElement("button")
        newbutton.classList.add("resp")
        newbutton.textContent =answers.text
        if(answers.correct){
            newbutton.dataset.correct = answers.correct
        }
        resps.appendChild(newbutton)
    })
}


//ver quem clicou primeiro

function analise (){
        document.body.addEventListener("keyup",(e)=>{
    
            const chave = e.key
            e.stopPropagation()
            if(chave == "a"){
                 //parar o evento
                equipeComeca.style.display = "flex"
                equipeStart.style.display ="flex"
            }else if(chave == "l"){
                
                equipeComeca.style.display = "flex"
                secEquipeStar.style.display ="flex"
                
            }console.log(e)
            topo.style.height ="50%"
            btnAendB.style.display = "none"
            respostas.style.display = "flex"
            

            
        })



        
    
}
//adicionar nome da equipe ao header do jogo
function nome_comeca (nomeEquipeUm){
    equipeStart.innerText = ` ${nomeEquipeUm} responde`
    
}

function sec_comeca(nomeEquipeDois){
    secEquipeStar.innerText = ` ${nomeEquipeDois} responde`
    
}



























