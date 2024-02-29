let btn = document.getElementById("b")
let inp = document.getElementById("i")
let url = "https://api.openweathermap.org/data/2.5/weather?q="
let apikey = "771f0cac0ce513172c36c5c2f828699b"

let tmp = document.getElementById("temp")
let cty = document.getElementById("city")

let i = document.getElementById("ig")

let w = document.getElementById("wind")
let h = document.getElementById("hum")

let wt = document.getElementById("weather")
let invalid = document.getElementById("in")

async function getw(city) {
     
     const response = await fetch(url + city + `&appid=${apikey}`);
     
     if (response.status == 404) {
          invalid.style.display = "block"
          wt.style.display = "none"
     }

     else {

          var data = await response.json()
          console.log(data)

          tmp.innerHTML = Math.round(data.main.temp / 10) + "°C"
          cty.innerHTML = inp.value

          w.innerHTML = data.wind.speed + "km/h <br> Wind"
          h.innerHTML = data.main.humidity + "% <br> Humidity"

          if (data.weather[0].main == "Clouds") {
               i.src = "clouds.png"
          }

          else if (data.weather[0].main == "Rain") {
               i.src = "rain.png"
          }

          else if (data.weather[0].main == "Clear") {
               i.src = "clear.png"
          }

          else if (data.weather[0].main == "Drizzle") {
               i.src = "drizzle.png"
          }

          else if (data.weather[0].main == "Mist") {
               i.src = "mist.png"
          }

          else if (data.weather[0].main == "Snow") {
               i.src = "snow.png"
          }


          invalid.style.display = "none"
          wt.style.display = "block"
     }

}




btn.addEventListener("click", () => {
     wt.style.display = "block"
     getw(inp.value)
})

