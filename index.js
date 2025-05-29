
// Pseudocode for Question-1

async function sendReminder(email) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(`Reminder sent to ${email}`);
}

const users = ["user1@example.com", "user2@example.com", "user3@example.com"];

users.forEach(email => {
    sendReminder(email);
});


// Pseudocode for Question-2

//Declare the function tryLogin
//Initialize a counter attempts to 0 
//Create an inner function attempt() and inside attempt(), increment attempts 
//Use setTimeout() to delay 1 second 
//Inside setTimeout(), use a Promise to simulate a login result
//If it’s the third attempt (attempts === 3), resolve the promise (login successful).
//Otherwise, reject the promise (login failed).
//On then, log "Login successful" – Successful login on third try.
//On catch, check if attempts are less than 3:
//If yes, call attempt() again.
// If no, log "Login failed after 3 attempts".


function tryLogin() {
  let attempts = 0;

  function attempt() {
    attempts++;
    console.log(`Attempt ${attempts}...`);

    setTimeout(() => {
      new Promise((resolve, reject) => {
        if (attempts === 3) {
          resolve();
        } else {
          reject();
        }
      })
      .then(() => {
        console.log("Login successful");
      })
      .catch(() => {
        if (attempts < 3) {
          attempt(); 
        } else {
          console.log("Login failed after 3 attempts");
        }
      });
    }, 1000); 
  }

  attempt(); 
}

tryLogin(); 


// Pseudocode for Question-3

// Initialize the countdown starting number
// Start a repeating interval that runs every second (1000 ms)
// Display the current count value
// Decrease the count by 1
// Check if the count has gone below 0 stop the interval
// Log the final message
// Interval delay set to 1000 milliseconds (1 second)

  let count = 5; 

 const timer = setInterval(() => {  
  console.log(count);              
  count--;                         

  if (count < 0) {                
    clearInterval(timer);         
    console.log("Time's up!");    
  }
 }, 1000);                          


// Pseudocode for Question-4

//Create a helper function that returns a Promise that resolves after a delay
//Define an async function that simulates staged loading
//Log the first stage
//Wait 1 second
//Log the second stage
//Wait 2 seconds
//Log the third stage
//Wait 1 second
//Log the final message
//Call the loadPage function to start the simulation

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadPage() {
  console.log("Loading header...");     
  await delay(1000);                  
  console.log("Loading content...");    
  await delay(2000);                  

  console.log("Loading footer...");     
  await delay(1000);                   

  console.log("Page fully loaded");    
}

loadPage();



// Pseudocode for Question-5

// Step 1: Define the fetchPrice function
// Return a new Promise
// Use setTimeout to simulate a 2-second delay
// Resolve the promise with the desired message
// 2000 milliseconds = 2 seconds
// Step 2: Create an async function to call fetchPrice using await
// Wait for AAPL price to be fetched
// Logs: Price for AAPL retrieved
// Wait for GOOG price to be fetched
// Logs: Price for GOOG retrieved
// Step 3: Call the async function

function fetchPrice(symbol) {
  
  return new Promise((resolve) => {
    
    setTimeout(() => {
    
      resolve(`Price for ${symbol} retrieved`);
    }, 2000); 
  });
}


async function getStockPrices() {

  const aaplPrice = await fetchPrice("AAPL");
  console.log(aaplPrice); 

  const googPrice = await fetchPrice("GOOG");
  console.log(googPrice); 
}


getStockPrices();








