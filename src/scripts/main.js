// console.log(businesses);

const outEl = document.querySelector("#output");

const words = ["The ", "quick ", "brown ", "fox ", "jumped ", "over ", "the ", "lazy ", "dog."]

const sentence = words.reduce(
  (currentWord, nextWord) => currentWord += nextWord
)

console.log(sentence)

// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

// const totalRainfall = monthlyRainfall.reduce(
//   (currentTotal, nextValue) => currentTotal += nextValue) 
  


// console.log(totalRainfall)

// businesses.forEach(business => {
//   /* CALCULATE ORDER SUMMARY */
//   let totalOrders = business.orders.reduce(
//     (currentTotal, nextValue) => currentTotal += nextValue,
//     0
// )

//   outEl.innerHTML += `
//       <h2>
//           ${business.companyName}
//           ($${totalOrders})
//       </h2>
//       <section>
//           ${business.addressFullStreet}
//       </section>
//       <section>
//           ${business.addressCity},
//           ${business.addressStateCode}
//           ${business.addressZipCode}
//       </section>
//   `;
//   outEl.innerHTML += "<hr/>";
// });