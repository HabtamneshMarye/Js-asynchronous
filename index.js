
// Pseudocode for Question-1

//create a Async function to send reminder after 5 seconds
// and  Wait for 5 seconds using a Promise wrapper
// simulating 3 users with a different email
// send reminders to each user

async function sendReminder(email) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(`Reminder sent to ${email}`);
}

const users = ["user1@example.com", "user2@example.com", "user3@example.com"];

users.forEach(email => {
    sendReminder(email);
});


// Pseudocode for Question-2

//create a function called tryLogin
//Initialize a counter attempts to 0 
//create an inner function attempt inside attempt(), increment attempts 
//use setTimeout() to delay 1 second 
//inside setTimeout(), using a Promise to simulate a login result
//If the third attempt (attempts === 3), resolve the promise (login successful).
//otherwise, reject the promise (login failed).
//on then, display "Login successful" – Successful login on third try.
//On catch, check if attempts are less than 3:
//if it is yes, call attempt() again.
// if no, display "Login failed after 3 attempts".


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

// initialize the countdown starting number
// start a repeating interval that runs every second (1000 ms)
// display the current count value
// decrease the count by 1
// check if the count has gone below 0 stop the interval
// display the final message
// interval delay set to 1000 milliseconds (1 second)

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

//create a helper function that returns a Promise that resolves after a delay
//define an async function that simulates staged loading
//log the first stage wait 1 second
//log the second stage wait 2 seconds
//log the third stage wait 1 second
//log the final message
//call the loadPage function to start the simulation

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

// define the fetchPrice function return a new promise
// use setTimeout to simulate a 2-second delay
// resolve the promise with the desired message
// create an async function to call fetchPrice using await
// wait for AAPL price to be fetched logs price for AAPL retrieved
// wait for GOOG price to be fetched logs price for GOOG retrieved
// call the async function

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








