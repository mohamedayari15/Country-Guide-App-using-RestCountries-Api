
let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-inp");

searchBtn.addEventListener("click", function () {

    let countryName = countryInput.value;
    let apiUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(apiUrl);

    fetch(apiUrl).then((response) => {
        
        console.log(response)

        data = response.json()
            .then((data) => {
                // console.log(data[0]);
                // console.log(data[0].capital[0]);
                // console.log(data[0].flags.svg);
                // console.log(data[0].name.common);
                // console.log(data[0].continents[0]);
                // console.log(data[0].population);
                // console.log(Object.keys(data[0].currencies)[0]);;
                // console.log(data[0].currencies[Object.keys(data[0].currencies)[0]].name);
                // console.log(Object.values(data[0].languages).join(", "));
            
            result.innerHTML = `
                <img src="${data[0].flags.svg}" class="flag-img">
                <h2>${data[0].name.common}</h2>

                <div class="data-wrapper">
                    <h4><span>Capital: </span> ${data[0].capital[0]} </h4>
                    <p><span>Continent: </span> ${data[0].continents[0]}</p>
                    <p><span>Population: </span> ${data[0].population}</p>
                    <p><span>Currency: </span> ${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)[0]].name}</p>
                    <p><span>Language: </span> ${Object.values(data[0].languages).join(", ")}</p>
                </div>`;

            }).catch(() => {
        
                if (countryInput.value === "") {
                    result.innerHTML = `<h5>The input field cannot be empty !</h5>`;
                }
                else {
                    result.innerHTML = `<h5>404 Country not found</h5>`;
                }
            });
    });
});