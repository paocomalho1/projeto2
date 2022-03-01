function temaDark(){
    const conteudo = document.querySelector(".conteudo")
    if(!conteudo.classList.contains("conteudo--Dark")){
        temaDarkAdd()
    }
        else{temaDarkRemove()
        }


}

function temaDarkAdd(){
    const conteudo = document.querySelector(".conteudo")
    const conteudoTopBackground = document.querySelector(".conteudo__top-background")
    const titulo = document.querySelector(".conteudo__titulo")
    const subTitulo = document.querySelector(".conteudo__subtitulo")
    const radioTexto = document.querySelector(".conteudo__radio-texto")
    const card = document.querySelectorAll('.conteudo__card')
    const iconeTexto = document.querySelectorAll(".conteudo__icone-texto")
    const numero = document.querySelectorAll(".conteudo__numero")
    const seguidores = document.querySelectorAll(".conteudo__seguidores")
    const titulo2 = document.querySelector(".baixo__titulo")
    const card2 = document.querySelectorAll(".baixo__item")
    const likes = document.querySelectorAll(".baixo__likes")
    const numero2 = document.querySelectorAll(".baixo__numero")
    const toggle = document.querySelector(".slider")
    const toggleCirculo = document.querySelector(".slider.round")
    conteudo.classList.add("conteudo--Dark")
    conteudoTopBackground.classList.add("conteudo__top-background--Dark")
    titulo.classList.add("conteudo__titulo--Dark")
    subTitulo.classList.add("conteudo__subtitulo--Dark")
    radioTexto.classList.add("conteudo__radio-texto--Dark")
    titulo2.classList.add("baixo__titulo--Dark")
    toggle.classList.add("slider--Dark")
    toggleCirculo.classList.add("round--Dark")
    
    for(let i = 0; i < 4; i++){

        card[i].classList.add("conteudo__card--Dark")
        iconeTexto[i].classList.add("conteudo__icone-texto--Dark")
        numero[i].classList.add("conteudo__numero--Dark")
        seguidores[i].classList.add("conteudo__numero--Dark")
            
        }
        for(let i2 = 0; i2 < 8; i2++){
            card2[i2].classList.add("baixo__item--Dark")
            likes[i2].classList.add("baixo__likes--Dark")
            numero2[i2].classList.add("baixo__numero--Dark")

        }

    }
    function temaDarkRemove(){
        const conteudo = document.querySelector(".conteudo")
        const conteudoTopBackground = document.querySelector(".conteudo__top-background")
        const titulo = document.querySelector(".conteudo__titulo")
        const subTitulo = document.querySelector(".conteudo__subtitulo")
        const radioTexto = document.querySelector(".conteudo__radio-texto")
        const card = document.querySelectorAll('.conteudo__card')
        const iconeTexto = document.querySelectorAll(".conteudo__icone-texto")
        const numero = document.querySelectorAll(".conteudo__numero")
        const seguidores = document.querySelectorAll(".conteudo__seguidores")
        const titulo2 = document.querySelector(".baixo__titulo")
        const card2 = document.querySelectorAll(".baixo__item")
        const likes = document.querySelectorAll(".baixo__likes")
        const numero2 = document.querySelectorAll(".baixo__numero")
        const toggle = document.querySelector(".slider")
        const toggleCirculo = document.querySelector(".slider.round")
        conteudo.classList.remove("conteudo--Dark")
        conteudoTopBackground.classList.remove("conteudo__top-background--Dark")
        titulo.classList.remove("conteudo__titulo--Dark")
        subTitulo.classList.remove("conteudo__subtitulo--Dark")
        radioTexto.classList.remove("conteudo__radio-texto--Dark")
        titulo2.classList.remove("baixo__titulo--Dark")
        toggle.classList.remove("slider--Dark")
        toggleCirculo.classList.remove("round--Dark")
        
        for(let i = 0; i < 4; i++){

            card[i].classList.remove("conteudo__card--Dark")
            iconeTexto[i].classList.remove("conteudo__icone-texto--Dark")
            numero[i].classList.remove("conteudo__numero--Dark")
            seguidores[i].classList.remove("conteudo__numero--Dark")
            
        }
            for(let i2 = 0; i2 < 8; i2++){

                card2[i2].classList.remove("baixo__item--Dark")
                likes[i2].classList.remove("baixo__likes--Dark")
                numero2[i2].classList.remove("baixo__numero--Dark")

        }

        }
