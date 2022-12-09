/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 * Reference: https://www.youtube.com/watch?v=C3dfjyft_m4
 * Reference : https://www.youtube.com/watch?v=LkvdPf6LCeM
 */


//print Json data indavidualy for each P tag in the home page using the Fetch API 
fetch("finalProject.json")
.then(response => response.json())
.then(data =>{
console.log(data)

document.querySelector(".p1").innerText = "Capital :" + data.JetBird.Country[0].Turkey.capital + "\n" + data.JetBird.Country[0].Turkey.description;
document.querySelector(".p2").innerText = "Capital :" + data.JetBird.Country[1].Ireland.capital + "\n" + data.JetBird.Country[1].Ireland.description;
document.querySelector(".p3").innerText = "Capital :" + data.JetBird.Country[2].Spain.capital + "\n" + data.JetBird.Country[2].Spain.description;
document.querySelector(".p4").innerText = "Capital :" + data.JetBird.Country[3].Greece.capital + "\n" + data.JetBird.Country[3].Greece.description;
document.querySelector(".p5").innerText = "Capital :" + data.JetBird.Country[4].France.capital + "\n" + data.JetBird.Country[4].France.description;
document.querySelector(".p6").innerText = "Capital :" + data.JetBird.Country[5].Italy.capital + "\n" + data.JetBird.Country[5].Italy.description;
document.querySelector(".p7").innerText = "Capital :" + data.JetBird.Country[6].German.capital + "\n" + data.JetBird.Country[6].German.description;
document.querySelector(".p8").innerText = "Capital :" + data.JetBird.Country[7].Australia.capital + "\n" + data.JetBird.Country[7].Australia.description;
document.querySelector(".p9").innerText = "Capital :" + data.JetBird.Country[8].Portugal.capital + "\n" + data.JetBird.Country[8].Portugal.description;
document.querySelector(".p10").innerText = "Capital :" + data.JetBird.Country[9].Japan.capital + "\n" + data.JetBird.Country[9].Japan.description;
document.querySelector(".p11").innerText = "Capital :" + data.JetBird.Country[10].Dubai.capital + "\n" + data.JetBird.Country[10].Dubai.description;
document.querySelector(".p12").innerText = "Capital :" + data.JetBird.Country[11].Egypt.capital + "\n" + data.JetBird.Country[11].Egypt.description;
document.querySelector(".p13").innerText = "Capital :" + data.JetBird.Country[12].Qatar.capital + "\n" + data.JetBird.Country[12].Qatar.description;
document.querySelector(".p14").innerText = "Capital :" + data.JetBird.Country[13].England.capital + "\n" + data.JetBird.Country[13].England.description;
document.querySelector(".p15").innerText = "Capital :" + data.JetBird.Country[14].Finland.capital + "\n" + data.JetBird.Country[14].Finland.description;

});



