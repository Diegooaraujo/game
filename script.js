const escolher_equipe = document.querySelector(".escolher-equipes")
const equipeUm = document.querySelector("#NomeEquipeUm")
const equipeDois = document.querySelector("#NomeEquipeDois")
const btnEnviarNome = document.querySelector("#enviarNome")
let mudarTela = false

btnEnviarNome.addEventListener("Click",(e)=>{
    
    if(equipeUm.value!=equipeUm && equipeDois.value!=equipeDois){
        let nomeEquipeUm = equipeUm.value
        let nomeEquipeDois = equipeDois.value
        mudarTela = true

        
    }
    
})
if(mudarTela){
    escolher_equipe.style.display="none"
    conteiner.style.display ="flex"
}



const conteiner = document.querySelector(".conteiner")
const passa_repassa = document.querySelector(".passa-repassa")



conteiner.style.display ="none"
passa_repassa.style.display ="none"

