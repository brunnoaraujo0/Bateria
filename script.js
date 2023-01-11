document.body.addEventListener('keyup', (event)=>{ //EVENTO DE QUANDO CLICAR EM ALGUMA LETRA
    playSound( event.code.toLowerCase() ); //DISPARE ESSA FUNCAO EM QUE RECEBE COMO PARAMETRO QUAL LETRA TOCOU
});

document.querySelector('.composer button').addEventListener('click', () => { // EVENTO DE CLICK DO BOTAO TOCAR 
    let song = document.querySelector('#input').value; //PEGUE QUAL A SEQUENCIA QUE FOI DIGITADA

    if(song !== '') { // SE TIVER DIFERENTE DE VAZIA
        let songArray = song.split(''); //SEPARE EM LETRAS EM ARRAY
        playComposition(songArray); // CHAMA A FUNCAO QUE TOCA
    }
});

function playSound(sound) { //FUNCAO QUE TOCA A MUSICA
    let audioElement = document.querySelector(`#s_${sound}`); //PEGUE A MUSICA DA LETRA CORRESPODENTE
    let keyElement = document.querySelector(`div[data-key="${sound}"]`); //PEGUE A CAIXINHA QUE TEM COMO PARAMETRO DATA-KEY TAL LETRA

    if(audioElement) { //SE EXISTIR ESSE SOM DA LETRA
        audioElement.currentTime = 0; //ZERE O TEMPO
        audioElement.play(); //E TOQUE A MUSICA
    }

    if(keyElement) { //SE EXISTIR ESSA CAIXINHA
        keyElement.classList.add('active'); //MUDE A COR DELA 

        setTimeout(()=>{  //ESPERE ALGUNS MILISEGUNDO 
            keyElement.classList.remove('active'); //E REMOVA A CLASSE ACTIVE
        }, 300);
    }
}

function playComposition(songArray) { //FUNCAO TOQUE A CANCAO, RECEBE UM ARRAY COM AS LETRAS
    let wait = 0; //VARIAVEL PARA CONTAR O TEMPO DE INTERVALO DE TOCAR CADA LETRA

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250; //A CADA LETRA ACRESCENTE 25OMS PARA TOCAR
    }
}