// Global variables 
let gameStarted = false;
let wins = 0;
let losses = 0;
let draws = 0;
let roundCount = 0;
let results = []; 

// to validate player name and start the game
function startGame() {
    let nameInput = document.getElementById("playerName").value.trim();

    // Check if name input is empty
    if (nameInput === "") {
        alert("Please enter your name.");
        return;
    }

    // Allow game to proceed and display welcome message and start time
    gameStarted = true;
    document.getElementById("welcomeMsg").innerHTML = "Welcome, " + nameInput + "!";
    document.getElementById("startTime").innerHTML = "Game started on: " + new Date();
}

// Function to randomly select rock, paper, or scissors for the computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a single round when Rock, Paper, or Scissors is clicked
function playRound(playerChoice) {
    // Ensure player has clicked Start Game first
    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();
    roundCount++;

    // Update both images based on choices
    document.getElementById("playerImg").src = playerChoice + ".png";
    document.getElementById("computerImg").src = computerChoice + ".png";

    let outcome = "";
    let resultElement = document.getElementById("result");

    // Determine winner 
    if (playerChoice === computerChoice) {
        outcome = "Draw";
        draws++;
        resultElement.innerHTML = "It's a Draw! Both chose " + playerChoice + ".";
        resultElement.style.color = "grey";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        outcome = "Win";
        wins++;
        resultElement.innerHTML = "You Win! " + playerChoice + " beats " + computerChoice + ".";
        resultElement.style.color = "green";
    } else {
        outcome = "Lose";
        losses++;
        resultElement.innerHTML = "You Lose! " + computerChoice + " beats " + playerChoice + ".";
        resultElement.style.color = "red";
    }

    // Record result
    results.push(outcome);
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Append new row to the history table
    let historyBody = document.getElementById("historyBody");
    historyBody.innerHTML +=
        "<tr>" +
        "<td>" + roundCount + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + outcome + "</td>" +
        "</tr>";
}

// Function to calculate win percentage 
function showSummary() {
    if (results.length === 0) {
        document.getElementById("summaryText").innerHTML = "No rounds played yet.";
        return;
    }

    let winCount = 0;

    // Loop through results array to count wins
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "Win") {
            winCount++;
        }
    }

    let winPercentage = Math.round((winCount / results.length) * 100);
    document.getElementById("summaryText").innerHTML =
        "You played " + results.length + " rounds and won " + winPercentage + "%.";
}

// to reset all scores, arrays, history rows, and messages
function resetGame() {
    wins = 0;
    losses = 0;
    draws = 0;
    roundCount = 0;
    results = [];

    document.getElementById("wins").innerHTML = "0";
    document.getElementById("losses").innerHTML = "0";
    document.getElementById("draws").innerHTML = "0";
    document.getElementById("result").innerHTML = "";
    document.getElementById("summaryText").innerHTML = "";
    document.getElementById("historyBody").innerHTML = "";
    document.getElementById("playerImg").src = "rock.png";
    document.getElementById("computerImg").src = "rock.png";
}