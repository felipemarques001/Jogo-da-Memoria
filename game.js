//This object is responsible for organizing the array and checking whether it forms a matching pair or not
let game = {
    techs: ['bootstrap', 'css', 'electron', 'firebase', 'html', 'javascript', 'jquery', 'mongo', 'node', 'react'],

    cards: null,

    //Creating the array 'cards'
    createCardsFromTechs: function(){
    this.cards = [];
    for(let tech of this.techs){
        this.cards.push(this.createPairFromTech(tech));
    }
    this.cards = this.cards.flatMap( (pair) => pair); //the 'flatmap' function looks if there is an array inside the main array, if there is, it will take all the elements of this array and put them inside the main array. 
    this.shuffleCards();
    return this.cards;
    },

    createPairFromTech: function(tech){
    return [{
        id: tech + parseInt(Math.random() * 100),
        icon: tech,
        flipped: false,
    },{
        id: tech + parseInt(Math.random() * 100),
        icon: tech,
        flipped: false, 
    }]},

    //Function to shuffle the array 'cards'
    shuffleCards: function(cards){
    for (let index = this.cards.length - 1; index > 0; index--) { //selecing the index
        const randomIndex = Math.floor(Math.random() * (index + 1)); //selecing one 'random index'
        //Shuffling the array
        const temp = this.cards[index];  
        this.cards[index] = this.cards[randomIndex];
        this.cards[randomIndex] = temp;
    }
}
}