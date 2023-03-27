const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '542c5af924msh91ec8edd98fe73fp159354jsn59edefe85649',
        'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
    }
};

fetch('https://country-facts.p.rapidapi.com/all', options)
.then(response => response.json())
.then(response => { 
let compareCountries = [response[62],response[120],response[87],response[125]];        
compareCountries.forEach(compareCountry => {
    console.log(compareCountry.currencies)
    compareCountries.innerHTML += `
      <div class="col-md-3 col-sm-6">
          <div class="card card-block">
              <img src="${compareCountry.flag}">
              <h5 class="card-title mt-3 mb-3">${compareCountry.name.common}</h5>
              <p class="card-text">
              Capital: ${compareCountry.capital} <br/>
              Population: ${compareCountry.population}
              </p>
              <button class="btn btn-primary" onclick="saveDataAndRedirect('${compareCountry.name.common}', '${compareCountry.capital}', '${compareCountry.population}', '${compareCountry.flag}', '${compareCountry.latlng[0]}', '${compareCountry.latlng[1]}', '${compareCountry.currencies}', '${compareCountry.languages}')">Go to detail page</button>

          </div>
      </div>
      `;
  });
  
           

})
.catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '542c5af924msh91ec8edd98fe73fp159354jsn59edefe85649',
// 		'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
// 	}
// };

// fetch('https://country-facts.p.rapidapi.com/all', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// let compareBtn = document.getElementById("compare_btn");
// compareBtn.addEventListener("click", () => {
//     let city1 = example-search-input1.value;
//     let finalURL = `https://country-facts.p.rapidapi.com/all`;
//     console.log(finalURL);
//     fetch(finalURL)
//         .then((response) => response.json())
//         .then((data) => {
//             //   console.log(data[0]);
//             //   console.log(data[0].capital[0]);
//             //   console.log(data[0].flags.svg);
//             //   console.log(data[0].name.common);
//             //   console.log(data[0].continents[0]);
//             //   console.log(Object.keys(data[0].currencies)[0]);
//             //   console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
//             //   console.log(
//             //     Object.values(data[0].languages).toString().split(",").join(", ")
//             //   );
//             //   console.log(data[0].population);

//         })
//         .catch(() => {
//             if (city1.length == 0) {
//                 result.innerHTML = `<h3>The input field cannot be empty</h3>`;
//             } else {
//                 result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
//             }
//         });
// });