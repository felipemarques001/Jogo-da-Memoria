const FRONT = "card_front";
const BACK = "card_back";
const ICON = "icon";



        //Starting the game
startGame()
function startGame(){ 
    initializeCards(game.createCardsFromTechs())
}

//Function to place the cards on board
function initializeCards(_cards){
    let gameBoard = document.getElementById('gameBoard');
    game.cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add('card');
        cardElement.dataset.icon = card.icon;
        cardElement.addEventListener('click', flipCard);

        createCardContent(card, cardElement);
        gameBoard.appendChild(cardElement);

    });
}
function createCardContent(card, cardElement){
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}
function createCardFace(face, card, element){
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face)
    if(face === FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement); 
    }else{
        cardElementFace.innerHTML = '&lt/&gt';
    }
    element.appendChild(cardElementFace);
}


//Function to flip the card when it is clicked
let number = 0;
let score = 0;
let firstCard = null;
let secondCard = null;

function flipCard(){
    number ++
    if(number == 1){
        this.classList.add('flip');
        firstCard = this;
    }else if(number == 2){
        secondCard = this;
        this.classList.add('flip');
        number = 0;
        let gameBoard = document.getElementById('gameBoard');
        function untwistCards(){
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
        }

        if(firstCard.dataset.icon == secondCard.dataset.icon){
            gameBoard.classList.add('noClick')
            setTimeout(() => {
                gameBoard.classList.remove('noClick');
            }, 700);

            score ++;
            if(score == 10){
                let gameOver = document.getElementById('gameOver');
                gameOver.style.display = 'flex';
                setTimeout(() => {
                    location.reload();
                }, 5000);
            }else{}
        }
        else{ //If the cards are not equal
            gameBoard.classList.add('noClick')
            setTimeout(() => {
                untwistCards();
                gameBoard.classList.remove('noClick');
            }, 1000);
        }
    }
}

function restart(){
    location.reload();
}
