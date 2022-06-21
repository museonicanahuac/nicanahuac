const authorName = "Leonardo J. Salazar";
const autorCountry = "Nicaragua";

//Getting Author's name
document.querySelector("#author").textContent = authorName;
document.querySelector("#author2").textContent = authorName;

//alert("HEllo");

//Getting Course's name
document.querySelector("#country").textContent = autorCountry;

//Getting Current Year
const d = new Date();
const currentYears = document.querySelector("#currenYear");
currentYears.textContent = d.getFullYear();

//Getting Current Time
const upateDates = document.querySelector("#updateDate");
currentTime = `  ${d.getHours()}:${d.getMinutes()}:${d.getMilliseconds()}`;

//Getting Current Date
const selection = { month: "long", day: "numeric", year: "numeric" };
upateDates.textContent =
  new Date().toLocaleDateString("en-US", selection) + currentTime;


function ver(n) {
    document.getElementById("subseccion1"+n).style.display="block";
    alert("TESTING SOMETHING");
    }
    
function ocultar(n) {
    document.getElementById("subseccion1"+n).style.display="none";
    alert("TESTING SOMETHING");
    }
