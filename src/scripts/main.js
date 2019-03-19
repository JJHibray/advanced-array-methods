
// console.log(businesses);

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

// Array to contain all the New York businesses
const manuIndustry = businesses.filter(business => {
  console.log(business.addressStateCode)
  let industry = false

  if (business.companyIndustry === "Manufacturing") {
     industry = true
  }

  return industry
})

console.log(manuIndustry)

manuIndustry.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});