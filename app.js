const apiKey = "ENTER YOUR API KEY";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


async function getWeatherByLocation(city){
  // use fetch to get data from the api

  addWeatherToPage(respData);
}

function generateImageUrl(iconUrl) {
  return `https:${iconUrl}`;
};

function addWeatherToPage(data){
  // weather.innerHTML = `
  // <h2><img src="${generateImageUrl(data.current.condition.icon)}" /> ${temp}°C <img src="${generateImageUrl(data.current.condition.icon)}" /></h2>
  // <small>${data.current.condition.text}</small>
  // `;


 //   cleanup
};


form.addEventListener('submit',(e) =>{
  
});
