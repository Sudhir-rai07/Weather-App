const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0bc09a55e2mshef015db42ef2630p1f2e6bjsne07fd2c851ab',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = async (param) =>{

cityName.innerHTML = city.value

let weather = await fetch(url + param, options)
let responce = await weather.json();
console.log(responce);

temp.innerHTML = responce.temp + '&degC';
min_temp.innerHTML = responce.min_temp + '&degC'
max_temp.innerHTML = responce.max_temp + '&degC'
feels_like.innerHTML = responce.feels_like + '&degC'
humidity.innerHTML = responce.humidity + '%'

let sunriseTime = new Date(responce.sunrise*1000)
sunrise.innerHTML = sunriseTime.getHours() + ':' + sunriseTime.getMinutes() +':' + sunriseTime.getSeconds()

let sunsetTime = new Date(responce.sunset*1000)
sunset.innerHTML = sunsetTime.getHours() + ':' + sunsetTime.getMinutes() +':' + sunsetTime.getSeconds()


}




submit.addEventListener('click', (e)=>{
	e.preventDefault();
	getWeather(city.value);
})