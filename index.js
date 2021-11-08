"user strict"
const atm = require('./atm')

atm.validatePin()
// prompts user for pin and verifies it against hardcoded account pin (account.js)

// function mainMenu(){

// menu function 
// make switch cases for menu system here
// 1 for balance, 2 for withdrawal, 3 for deposit, 4 to exit 
// each case calls respective function from atm.js, then call itself to keep user in the menu option we make. 

mainMenu()

function mainMenu() {
let prompt = require("prompt-sync")();
console.log("Welcome! How can we help you?  \nPress 1 for Balance\nPress 2 for Withdrawal\nPress 3 for Deposit\nPress 0 to Exit\n")
menuOptions = (prompt());

// function mainMenu(menuOptions){
    switch(menuOptions) {
        case "1":
            atm.getBalance();
            mainMenu()
        case "2":
            atm.withdrawal();
            mainMenu()
        case "3":
            atm.deposit();
            mainMenu()
        case "0":
        console.log("Goodbye");    
        process.exit()
        // atm.validatePin();
        
    }
    // atm.validatePin;
}