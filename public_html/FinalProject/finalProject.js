/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 * Reference: https://www.youtube.com/watch?v=C3dfjyft_m4
 * Reference : https://www.youtube.com/watch?v=LkvdPf6LCeM
 * https://api.jsonbin.io/v3/b/6393772dc5b3a64f1bc79301   cc
 */
/*
 * Reference: https://www.youtube.com/watch?v=C3dfjyft_m4
 * Reference : https://www.youtube.com/watch?v=LkvdPf6LCeM
 */
//print Json data indavidualy for each P tag in the home page using the Fetch API 
fetch("https://api.jsonbin.io/v3/b/6393772dc5b3a64f1bc79301")
        .then(response => response.json())
        .then(data => {
            console.log(data)

            document.querySelector(".p1").innerText = "Capital :" + data.record.JetBird.Country[0].Turkey.capital + "\n" + data.record.JetBird.Country[0].Turkey.description;
            document.querySelector(".p2").innerText = "Capital :" + data.record.JetBird.Country[1].Ireland.capital + "\n" + data.record.JetBird.Country[1].Ireland.description;
            document.querySelector(".p3").innerText = "Capital :" + data.record.JetBird.Country[2].Spain.capital + "\n" + data.record.JetBird.Country[2].Spain.description;
            document.querySelector(".p4").innerText = "Capital :" + data.record.JetBird.Country[3].Greece.capital + "\n" + data.record.JetBird.Country[3].Greece.description;
            document.querySelector(".p5").innerText = "Capital :" + data.record.JetBird.Country[4].France.capital + "\n" + data.record.JetBird.Country[4].France.description;
            document.querySelector(".p6").innerText = "Capital :" + data.record.JetBird.Country[5].Italy.capital + "\n" + data.record.JetBird.Country[5].Italy.description;
            document.querySelector(".p7").innerText = "Capital :" + data.record.JetBird.Country[6].German.capital + "\n" + data.record.JetBird.Country[6].German.description;
            document.querySelector(".p8").innerText = "Capital :" + data.record.JetBird.Country[7].Australia.capital + "\n" + data.record.JetBird.Country[7].Australia.description;
            document.querySelector(".p9").innerText = "Capital :" + data.record.JetBird.Country[8].Portugal.capital + "\n" + data.record.JetBird.Country[8].Portugal.description;
            document.querySelector(".p10").innerText = "Capital :" + data.record.JetBird.Country[9].Japan.capital + "\n" + data.record.JetBird.Country[9].Japan.description;
            document.querySelector(".p11").innerText = "Capital :" + data.record.JetBird.Country[10].Dubai.capital + "\n" + data.record.JetBird.Country[10].Dubai.description;
            document.querySelector(".p12").innerText = "Capital :" + data.record.JetBird.Country[11].Egypt.capital + "\n" + data.record.JetBird.Country[11].Egypt.description;
            document.querySelector(".p13").innerText = "Capital :" + data.record.JetBird.Country[12].Qatar.capital + "\n" + data.record.JetBird.Country[12].Qatar.description;
            document.querySelector(".p14").innerText = "Capital :" + data.record.JetBird.Country[13].England.capital + "\n" + data.record.JetBird.Country[13].England.description;
            document.querySelector(".p15").innerText = "Capital :" + data.record.JetBird.Country[14].Finland.capital + "\n" + data.record.JetBird.Country[14].Finland.description;

        });


fetch("finalProject.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)

            document.querySelector(".e1").innerText = "Capit1al: " + data.JetBird.Country[0].Turkey.capital + "\n" + data.JetBird.Country[0].Turkey.description + "\nPopulation: " + data.JetBird.Country[0].Turkey.population + "\nCurrency: " + data.JetBird.Country[0].Turkey.currency + "\nLargest City: " + data.JetBird.Country[0].Turkey.largest_city + "\nCalling Code: " + data.JetBird.Country[0].Turkey.calling_code + "\nReligion: " + data.JetBird.Country[0].Turkey.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[0].Turkey.language[0].official_language;
            document.querySelector(".e2").innerText = "Capital: " + data.JetBird.Country[1].Ireland.capital + "\n" + data.JetBird.Country[1].Ireland.description + "\nPopulation: " + data.JetBird.Country[1].Ireland.population + "\nCurrency: " + data.JetBird.Country[1].Ireland.currency + "\nLargest City: " + data.JetBird.Country[1].Ireland.largest_city + "\nCalling Code: " + data.JetBird.Country[1].Ireland.calling_code + "\nReligion: " + data.JetBird.Country[1].Ireland.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[1].Ireland.language[0].offical_language;
            document.querySelector(".e3").innerText = "Capital: " + data.JetBird.Country[2].Spain.capital + "\n" + data.JetBird.Country[2].Spain.description + "\nPopulation: " + data.JetBird.Country[2].Spain.population + "\nCurrency: " + data.JetBird.Country[2].Spain.currency + "\nLargest City: " + data.JetBird.Country[2].Spain.largest_city + "\nCalling Code: " + data.JetBird.Country[2].Spain.calling_code + "\nReligion: " + data.JetBird.Country[2].Spain.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[2].Spain.language[0].offical_language;
            document.querySelector(".e4").innerText = "Capital: " + data.JetBird.Country[3].Greece.capital + "\n" + data.JetBird.Country[3].Greece.description + "\nPopulation: " + data.JetBird.Country[3].Greece.population + "\nCurrency: " + data.JetBird.Country[3].Greece.currency + "\nLargest City: " + data.JetBird.Country[3].Greece.largest_city + "\nCalling Code: " + data.JetBird.Country[3].Greece.calling_code + "\nReligion: " + data.JetBird.Country[3].Greece.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[3].Greece.language[0].offical_language;
            document.querySelector(".e5").innerText = "Capital: " + data.JetBird.Country[4].France.capital + "\n" + data.JetBird.Country[4].France.description + "\nPopulation: " + data.JetBird.Country[4].France.population + "\nCurrency: " + data.JetBird.Country[4].France.currency + "\nLargest City: " + data.JetBird.Country[4].France.largest_city + "\nCalling Code: " + data.JetBird.Country[4].France.calling_code + "\nReligion: " + data.JetBird.Country[4].France.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[4].France.language[0].offical_language;
            document.querySelector(".e6").innerText = "Capital: " + data.JetBird.Country[5].Italy.capital + "\n" + data.JetBird.Country[5].Italy.description + "\nPopulation: " + data.JetBird.Country[5].Italy.population + "\nCurrency: " + data.JetBird.Country[5].Italy.currency + "\nLargest City: " + data.JetBird.Country[5].Italy.largest_city + "\nCalling Code: " + data.JetBird.Country[5].Italy.calling_code + "\nReligion: " + data.JetBird.Country[5].Italy.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[5].Italy.language[0].offical_language;
            document.querySelector(".e7").innerText = "Capital: " + data.JetBird.Country[6].German.capital + "\n" + data.JetBird.Country[6].German.description + "\nPopulation: " + data.JetBird.Country[6].German.population + "\nCurrency: " + data.JetBird.Country[6].German.currency + "\nLargest City: " + data.JetBird.Country[6].German.largest_city + "\nCalling Code: " + data.JetBird.Country[6].German.calling_code + "\nReligion: " + data.JetBird.Country[6].German.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[6].German.language[0].official_language;
            document.querySelector(".e8").innerText = "Capital: " + data.JetBird.Country[7].Australia.capital + "\n" + data.JetBird.Country[7].Australia.description + "\nPopulation: " + data.JetBird.Country[7].Australia.population + "\nCurrency: " + data.JetBird.Country[7].Australia.currency + "\nLargest City: " + data.JetBird.Country[7].Australia.largest_city + "\nCalling Code: " + data.JetBird.Country[7].Australia.calling_code + "\nReligion: " + data.JetBird.Country[7].Australia.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[7].Australia.language[0].official_language;
            document.querySelector(".e9").innerText = "Capital: " + data.JetBird.Country[8].Portugal.capital + "\n" + data.JetBird.Country[8].Portugal.description + "\nPopulation: " + data.JetBird.Country[8].Portugal.population + "\nCurrency: " + data.JetBird.Country[8].Portugal.currency + "\nLargest City: " + data.JetBird.Country[8].Portugal.largest_city + "\nCalling Code: " + data.JetBird.Country[8].Portugal.calling_code + "\nReligion: " + data.JetBird.Country[8].Portugal.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[8].Portugal.language[0].official_language;
            document.querySelector(".e10").innerText = "Capital: " + data.JetBird.Country[9].Japan.capital + "\n" + data.JetBird.Country[9].Japan.description + "\nPopulation: " + data.JetBird.Country[9].Japan.population + "\nCurrency: " + data.JetBird.Country[9].Japan.currency + "\nLargest City: " + data.JetBird.Country[9].Japan.largest_city + "\nCalling Code: " + data.JetBird.Country[9].Japan.calling_code + "\nReligion: " + data.JetBird.Country[9].Japan.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[9].Japan.language[0].official_language;
            document.querySelector(".e11").innerText = "Capital: " + data.JetBird.Country[10].Dubai.capital + "\n" + data.JetBird.Country[10].Dubai.description + "\nPopulation: " + data.JetBird.Country[10].Dubai.population + "\nCurrency: " + data.JetBird.Country[10].Dubai.currency + "\nLargest City: " + data.JetBird.Country[10].Dubai.largest_city + "\nCalling Code: " + data.JetBird.Country[10].Dubai.calling_code + "\nReligion: " + data.JetBird.Country[10].Dubai.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[10].Dubai.language[0].official_language;
            document.querySelector(".e12").innerText = "Capital: " + data.JetBird.Country[11].Egypt.capital + "\n" + data.JetBird.Country[11].Egypt.description + "\nPopulation: " + data.JetBird.Country[11].Egypt.population + "\nCurrency: " + data.JetBird.Country[11].Egypt.currency + "\nLargest City: " + data.JetBird.Country[11].Egypt.largest_city + "\nCalling Code: " + data.JetBird.Country[11].Egypt.calling_code + "\nReligion: " + data.JetBird.Country[11].Egypt.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[11].Egypt.language[0].official_language;
            document.querySelector(".e13").innerText = "Capital: " + data.JetBird.Country[12].Qatar.capital + "\n" + data.JetBird.Country[12].Qatar.description + "\nPopulation: " + data.JetBird.Country[12].Qatar.population + "\nCurrency: " + data.JetBird.Country[12].Qatar.currency + "\nLargest City: " + data.JetBird.Country[12].Qatar.largest_city + "\nCalling Code: " + data.JetBird.Country[12].Qatar.calling_code + "\nReligion: " + data.JetBird.Country[12].Qatar.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[12].Qatar.language[0].official_language;
            document.querySelector(".e14").innerText = "Capital: " + data.JetBird.Country[13].England.capital + "\n" + data.JetBird.Country[13].England.description + "\nPopulation: " + data.JetBird.Country[13].England.population + "\nCurrency: " + data.JetBird.Country[13].England.currency + "\nLargest City: " + data.JetBird.Country[13].England.largest_city + "\nCalling Code: " + data.JetBird.Country[13].England.calling_code + "\nReligion: " + data.JetBird.Country[13].England.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[13].England.language[0].official_language;
            document.querySelector(".e15").innerText = "Capital: " + data.JetBird.Country[14].Finland.capital + "\n" + data.JetBird.Country[14].Finland.description + "\nPopulation: " + data.JetBird.Country[14].Finland.population + "\nCurrency: " + data.JetBird.Country[14].Finland.currency + "\nLargest City: " + data.JetBird.Country[14].Finland.largest_city + "\nCalling Code: " + data.JetBird.Country[14].Finland.calling_code + "\nReligion: " + data.JetBird.Country[14].Finland.religion + "\n(languages): " + "\nOfficial Language: " + data.JetBird.Country[14].Finland.language[0].official_language;

        });





