const axios = require('axios');

// Function to fetch a fun fact about a number using the Numbers API
// function funFactAboutNumber(num, baseUrl = "http://numbersapi.com/") {

//   const url = baseUrl + num;  

//   // Make the HTTP GET request using Axios and handle the response
//   axios.get(url)
//     .then(response => {
//       console.log(response.data);  // Log the response data from the API
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);  // Log any errors
//     });
// }
// console.log("Hello there")
// // Call the function with the number 4
// funFactAboutNumber(4);

// Question 2

// function favfournum(favNumbers = [7, 11, 22], baseUrl = "http://numbersapi.com/") {
//     // Ensure the numbers are correctly formatted as a comma-separated string
//     const numbersString = favNumbers.join(',');
//     const url = baseUrl + numbersString;

//     // Axios request returns a Promise; the function could also return this Promise
//     return axios.get(url)
//         .then(response => {
//             return response.data; // Optional: return data for further processing if needed
//         })
//         .catch(error => {
//             return error; // Optional: return error for further handling if needed
//         });
// }

// favfournum().then(data => {
//   console.log("API Response Data:", data);
// }).catch(error => {
//   console.error("Error fetching data:", error);
// });

// console.log("Request sent, waiting for response...");


// Question 3
// Function to fetch a fact about a number
function fetchFact(number = 3, baseUrl = "http://numbersapi.com/") {
  url = baseUrl + number
  return axios.get(url);
}

// Fetch 4 facts about the favorite number using Promise.all
function fetchFourFacts(number = 3) {
  Promise.all([
      fetchFact(number),
      fetchFact(number),
      fetchFact(number),
      fetchFact(number)
  ])
  .then(responses => {
      responses.forEach((response, index) => {
          console.log(`Response ${index + 1}:`, response.data);  // Log the full data object
      });
  })
  .catch(error => {
      console.error('Error fetching facts:', error);
  });
}

fetchFourFacts(4);
