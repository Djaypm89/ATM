"use strict"
const account = require('./account')
let prompt = require("prompt-sync")();


function getBalance(){
    console.log("Your balance is: " + account.balance);
    // balance;
}

function withdrawal(){
    // prompt user for amount
    let withdrawalAmount = parseInt(prompt("Enter Amount You Would Like To Withdraw: "));
        if (withdrawalAmount <= account.balance){
            account.balance = account.balance - withdrawalAmount
            console.log("Transaction approved, dispensing cash $" + withdrawalAmount + " New Account Balance $" + account.balance);
        }    
        else {
            console.log("Transaction declined, enter lesser amount");
        }
}

function deposit(){
    let depositAmount = parseInt(prompt("Enter Amount You Would Like To Deposit: "));
        account.balance = account.balance + depositAmount
        console.log("Deposit of $" + depositAmount+ " Processed, New Account Balance $: +" + account.balance);    
}

function validatePin(){
    let userPin = parseInt(prompt("Enter Your Pin: "));
    if(userPin === account.pin){
        console.log("Pin Entered Correctly")
    }
    else{
        console.log("Incorrect Pin. Try Again")
        validatePin()
    }
}



module.exports.getBalance = getBalance;
module.exports.withdrawal = withdrawal;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;
