let temp = 30;
let weather = "clear"; 
let activity; 

if (temp >= 25 && weather === "clear") {
    activity = "golf";
} else if  ((temp >= 10 && temp <= 24) || weather === "cloudy") {
    activity = "bowling";
}else activity = "hiking";

console.log(activity);

