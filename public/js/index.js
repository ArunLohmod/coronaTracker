

 const infoBox = document.querySelector(".info");
 const country = document.querySelector("#cnt-name");
 const newConf = document.querySelector("#new_con");
 const totConf = document.querySelector("#tot_case");
 const newDeath = document.querySelector("#new_death");
 const totDeath = document.querySelector("#tot_death");
 const newRec = document.querySelector("#new_rec");
 const totRec = document.querySelector("#tot_rec");
 const errorMsg = document.querySelector(".error");

const input = document.querySelector(".input");
  
infoBox.style.display = "none";

const dataBtn = document.querySelector("button"); 

 async function  getData(){
    

    try {
        
      function capitalize(input){
        const words = input.split(" ");
        const capitalizeWord = [];
        
        for(i in words){
          capitalizeWord.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
        }
        
        return capitalizeWord.join(" ")
        
        }
        
          let inputValue = capitalize(input.value);


          // giving commas between digits
          function numberWithCommas(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }

          


const url = "https://api.covid19api.com/summary";

  const data = await fetch(url);
  const jsonData = await data.json();
  const arrData = [jsonData];
  
  //  console.log(arrData[0].Countries[0].Country);
  //  console.log(jsonData);

  const countries = arrData[0].Countries;
   
  
  for(i in countries){

     if(inputValue == countries[i].Country){
      infoBox.style.display = "flex";

       country.innerHTML = inputValue
       newConf.innerHTML =numberWithCommas(countries[i].NewConfirmed)
       newDeath.innerHTML = numberWithCommas(countries[i].NewDeaths)
       newRec.innerHTML = numberWithCommas(countries[i].NewRecovered)
       totConf.innerHTML = numberWithCommas(countries[i].TotalConfirmed)
       totRec.innerHTML = numberWithCommas(countries[i].TotalRecovered)
       totDeath.innerHTML = countries[i].TotalDeath

       input.value = "";
     }

    
     
  }
   
  
        

    } catch (error) {
        console.log(error);
    }


}

// https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true

// https://api.covid19api.com/summary