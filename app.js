const apiKey = "ENTER YOUR API KEY";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (city) => `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;


async function getWeatherByLocation(city){
  const resp = await fetch(url(city), {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4142a0c53dmsh4a54d962d95520dp128a72jsn135ac720bba8',
		  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  });
  const respData = await resp.json();

  addWeatherToPage(respData);
}

function generateImageUrl(iconUrl) {
  return `https:${iconUrl}`;
};

function addWeatherToPage(data){
  const temp = data.current.feelslike_c;

  const weather = document.createElement('div')
  weather.classList.add('weather');

  weather.innerHTML = `
  <h2><img src="${generateImageUrl(data.current.condition.icon)}" /> ${temp}°C <img src="${generateImageUrl(data.current.condition.icon)}" /></h2>
  <small>${data.current.condition.text}</small>
  `;


 //   cleanup 
  main.innerHTML= "";
  main.appendChild(weather);
};



form.addEventListener('submit',(e) =>{
  e.preventDefault();

  const city = search.value;

  if(city){
    getWeatherByLocation(city)
  }

});
