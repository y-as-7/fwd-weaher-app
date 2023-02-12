
const date= document.getElementById("date");
const temp = document.getElementById("temp");
const content = document.getElementById("content"); 
const btn = document.getElementById("generate");
const feelings = document.getElementById("feelings");
const con =document.querySelector(".outputs")
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
const baseUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";
const key = "df0d3461865ce0be174fd59d5d73da0a";


  btn.addEventListener("click", btnHandler);

function btnHandler() {
  const country = document.getElementById("country").value;
  const zip = document.getElementById("zip").value;
  getWeather(baseUrl, zip, country, key);
  con.classList.add("display");
}

const getWeather = async (baseUrl, zipcode, countryCode, key) => {
  const res = await fetch(
    `${baseUrl}${zipcode},${countryCode}&appid=${key}`
  );

  try {
    const data = await res.json();
    data.date = newDate;
    data.feelings = feelings.value;
    //console.log(data);
    UpdateData(data);
  } catch (error) {
    console.log(error);
  }
};

const UpdateData = async (data) => {
  const res = await fetch("/weather/save", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(async (data) => {
    const res = await fetch("/weather");
    try {
      dateOfWeather = await res.json();
      console.log(dateOfWeather);
      date.innerHTML =" "+ dateOfWeather.date;
      temp.innerHTML = " "+dateOfWeather.temp;
      content.innerHTML = " "+dateOfWeather.feelings;
    } catch (error) {
      console.log(error);
    }
  });
};
