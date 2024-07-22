const key = "12e35c2a60111694b2ea097244490c8c"

//função para colocar os dados na tela
function dataOnScreen(data){
    console.log(data)

    document.querySelector("#city").innerHTML = "Tempo em " + data.name 
    document.querySelector("#weather").innerHTML = Math.floor(data.main.temp) + "ºC"
    document.querySelector("#text").innerHTML = data.weather[0].description
    document.querySelector("#air").innerHTML = data.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
}

//função API
async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    
    dataOnScreen(data)
}

//função para botão de pesquisar a cidade
function clickBtn() {
   const city = document.querySelector('.input-city').value

   searchCity(city)
}