const loadCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(json => displayCountries(json));
}

loadCountries();

const displayCountries = countries =>{
    const countriesDiv=document.getElementById('countries');
    countries.forEach( country => {
       /*  console.log(country); */
        const div=document.createElement('div');
        div.classList.add('country')
        div.innerHTML=`
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName=name=>{
  const url=`https://restcountries.com/v2/name/${name}`;
  fetch(url)
  .then(res => res.json())
  .then(json => displayCountryDetail(json[0]));
 /*  console.log(url); */
}

const displayCountryDetail=(country)=>{
    console.log(country);
    const countryDiv=document.getElementById('country-detail');
    countryDiv.innerHTML=`
    <h2>${country.name}</h2>
    <p>population:${country.population}</p>
    <img width="200px" src="${country.flag}">
    `;
}