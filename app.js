let submitBtn = document.querySelector(".submit-btn");
let inputValue = document.querySelector(".inputValue");
let cityName = document.querySelector(".cityName");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");
const provideWeatherDetails=()=>{
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          inputValue.value +
          "&appid=f1f447ff773058f7d993b4cc4ef40305"
      )
      .then(res=>{
          if(res.ok){
              return res.json();
          }})
          .then(data=>{
            let nameValue=data.name;
            let tempValue=data.main.temp;
            let descValue=data.weather[0].description;
            cityName.innerHTML=nameValue;
            temp.innerHTML=Math.round(tempValue-273);
            desc.innerHTML=descValue;
           
          })
          .catch(err=>{
              alert("Wrong input");
          })
      
}
submitBtn.addEventListener('click',provideWeatherDetails);
