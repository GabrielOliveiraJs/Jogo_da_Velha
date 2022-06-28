let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let secondPlayer

//CONTADOR DE JOGADAS
let player1 = 0
let player2 = 0

//ADICIONANDO O EVENTO DE CLICK AOS BOXES
for (let i = 0; i < boxes.length; i++) {

    //QUANDO ALGUÉM CLICA NA CAIXA
    boxes[i].addEventListener("click", function () {

        //ELEMENTO PARA IDENTIFICAR QUAL O PLAYER
        let el = checkEl(player1, player2)

        //VERIFICA SE O BOX JÁ TEM UM FILHO(X OU O), SE TIVER A JOGADA PASSA
        //PARA A PRÓXIMA BOX, IMPEDINDO QUE VÁRIOS ELEMENTOS SEJAM 
        //INCLUIDOS NA MESMA BOX
        if (this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true) //CLONANDO O ELEMENTO (X E O) PARA REUTILIZAR ELE DEPOIS

            this.appendChild(cloneEl)

            //COMPUTAR JOGADA

            //QUANDO O VALOR DOS DOIS FOREM IGUAIS, O JOGO VAI ENTENDER QUE
            //É A VEZ DO PLAYER 1, DEPOIS DA JOGADA ELE VAI SOMAR +1 AO PLAYER1,
            //O VALOR DOS DOIS PASSAM A SEREM DIFERENTES, ASSIM O JOGO ENTENDE
            //QUE É A VEZ DO PLAYER 2
            if (player1 == player2) {
                player1++

                //PARA JOGOS CONTRA A IA
                if(secondPlayer == 'ai-player'){
                    //FUNÇÃO PARA EXECUTAR A JOGADA
                    computerPlay()
                    player2++
                }

            } else {
                player2++
            }

            //CHAMA A FUNÇÃO PARA CHECAR QUEM VENCEU A RODADA
            checkWinCondition()

        }
    })
}

//EVENTO PARA SABER SE É 2 PLAYERS OU IA
for(let i = 0; i< buttons.length; i++) {

    buttons[i].addEventListener('click', function() {

        //PEGA O ID DO BOTÃO QUE FOI CLICADO
        secondPlayer = this.getAttribute("id")

        //ESCONDE OS BOTÕES NA TELA
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none'
        }

        //MOSTRANDO O JOGO
        setTimeout(function() {

            let container = document.querySelector('#container')
            container.classList.remove('hide')

        }, 500)
    })

}

//VERIFICA QUAL O JOGADOR DA RODADA
function checkEl(player1, player2) {

    if (player1 == player2) {
        //x
        el = x
    } else {
        //o
        el = o
    }

    return el

}

//CHECA QUEM VENCEU A RODADA
function checkWinCondition() {

    let b1 = document.getElementById('block-1')
    let b2 = document.getElementById('block-2')
    let b3 = document.getElementById('block-3')
    let b4 = document.getElementById('block-4')
    let b5 = document.getElementById('block-5')
    let b6 = document.getElementById('block-6')
    let b7 = document.getElementById('block-7')
    let b8 = document.getElementById('block-8')
    let b9 = document.getElementById('block-9')

    //HORIZONTAL
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className //PEGA O NOME DA CLASSE CONTIDA NO FILHO
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className


        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //PLAYER 1 (X) VENCEU
            declareWinner('x')
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //PLAYER 2 (O) VENCEU
            declareWinner('o')
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className //PEGA O NOME DA CLASSE CONTIDA NO FILHO
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className


        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //PLAYER 1 (X) VENCEU
            declareWinner('x')
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            //PLAYER 2 (O) VENCEU
            declareWinner('o')
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className //PEGA O NOME DA CLASSE CONTIDA NO FILHO
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className


        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //PLAYER 1 (X) VENCEU
            declareWinner('x')
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //PLAYER 2 (O) VENCEU
            declareWinner('o')
        }
    }

    //VERTICAL
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className //PEGA O NOME DA CLASSE CONTIDA NO FILHO
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className


        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //PLAYER 1 (X) VENCEU
            declareWinner('x')
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            //PLAYER 2 (O) VENCEU
            declareWinner('o')
        }
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className //PEGA O NOME DA CLASSE CONTIDA NO FILHO
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className


        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //PLAYER 1 (X) VENCEU
            declareWinner('x')
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            //PLAYER 2 (O) VENCEU
            declareWinner('o')
        }
    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className //PEGA O NOME DA CLASSE CONTIDA NO FILHO
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className


        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //PLAYER 1 (X) VENCEU
            declareWinner('x')
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            //PLAYER 2 (O) VENCEU
            declareWinner('o')
        }
    }

    //DIAGONAL
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className //PEGA O NOME DA CLASSE CONTIDA NO FILHO
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className


        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //PLAYER 1 (X) VENCEU
            declareWinner('x')
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            //PLAYER 2 (O) VENCEU
            declareWinner('o')
        }
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className //PEGA O NOME DA CLASSE CONTIDA NO FILHO
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className


        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //PLAYER 1 (X) VENCEU
            declareWinner('x')
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            //PLAYER 2 (O) VENCEU
            declareWinner('o')
        }

        //DEU VELHA
        let counter = 0

        //CONTA TODOS OS ELEMENTOS QUE TEM FILHO(QUE FORAM PREENCHIDOS COM X OU O)
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].childNodes[0] != undefined) {
                counter++        
            }
        }

        //SE NÃO HOUVER VENCEDORES ANTES DE TODOS OS BOXES SEREM PREENCHIDOS(ANTES DE A CONTAGEM CHEGAR A 9) 
        //ENTÃO A CONDIÇÃO ABAIXO SERÁ ATENDIDA
        if (counter == 9) {
            declareWinner('deu velha')
        }
    }
}

//LIMPA O JOGO, DECLARA O VENCEDOR E ATUALIZA O PLACAR
function declareWinner(winner) {

    let scoreboardX = document.querySelector('#scoreboard-1')
    let scoreboardO = document.querySelector('#scoreboard-2')
    let msg = ''

    if(winner == 'x') {
        //PEGA O TEXTO DO PLACAR, TRANSFORMA EM NUMERO E SOMA COM +1
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1
        msg = 'O jogador 1 venceu!'
    }else if (winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1
        msg = 'O jogador 2 venceu!'
    } else {
        msg = 'Deu velha!'
    }

    //EXIBE MENSAGEM NA TELA
    messageText.innerHTML = msg
    messageContainer.classList.remove('hide')

    //ESCONDE MENSAGEM DEPOIS DE EXIBIDA
    setTimeout(function() {
        messageContainer.classList.add('hide')
    }, 3000)

    //ZERAR AS JOGADAS
    //RESETA O CONTADOR DE JOGADAS QUE DEFINE O JOGADOR DA RODADA
    player1 = 0
    player2 = 0

    //REMOVE X E O DE TODOS OS BOXES
    let boxesToRemove = document.querySelectorAll('.box div')

    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }
}

//EXECUTAR A LÓGICA DA JOGADA DA IA
function computerPlay() {

    //CLONANDO O "O"
    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0

    for(let i = 0; i < boxes.length; i++) {
        //GERANDO UM NUMERO ALEATORIO PARA O PREENCHIMENTO
        let randomNumber = Math.floor(Math.random() * 5)

        //VERIFICA SE O BOX AINDA NÃO FOI PREENCHIDO
        if(boxes[i].childNodes[0] == undefined) {
            //SE O NUMERO ALEATÓRIO FOR MENOR OU IGUAL A 1, 
            //ENTÃO A BOX ATUAL SERÁ PREENCHIDA COM "O"
            //E O CONTADOR AUMENTA +1 
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO)
                counter++
                break
            }
            //SE A CONDIÇÃO ACIMA NÃO FOR ATINGIDA, 
            //ENTÃO SOMENTE O "filled" É ACRESCIDO DE +1
            //ASSIM FAZ UMA CHECAGEM DE QUANTAS BOXES JÁ ESTÃO PREENCHIDAS
        } else{
            filled++
        }
    }
    //VERIFICA SE A CONDIÇÃO ACIMA FOI ATINGIDA
    //E SE TODOS OS BOXES AINDA NÃO FORAM PREENCHIDOS
    //ENTÃO CHAMA A MESMA FUNÇÃO DE FORMA RECURSIVA
    if(counter == 0 && filled < 9) {
        computerPlay()
    }
}