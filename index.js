const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=d1169d25fbb1be8bb067e0593b19a9ae&q="

const input = document.getElementById("input");
const search = document.getElementById("search");

const symbol = document.getElementById("symbol");
const temparature = document.getElementById("temparature");
const loca = document.getElementById("location");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");


search.addEventListener("click", function(){
getData(input.value);
})

async function getData(cityname) {
    const respond = await  fetch(apiURL +`${cityname}`);
    console.log(respond);
   if(respond&&respond.ok)
   {
    let data = await respond.json();   
    console.log(data);

    temparature.innerHTML = Math.round(data.main.temp) + "&deg;c";
    loca.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + " km/h";
   }
   else{
    throw new Error(`HTTP error! Status: ${respond.status}`);
   }
}

