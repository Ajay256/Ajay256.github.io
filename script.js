const Btn1 =  document.getElementById("btn");  //btn reponse
const BtnAnimeContainer = document.querySelector(".anime-main")  //anime box select
const BtnAnimeImg = document.querySelector(".anime-img")   //anime image select
const BtnAnimeName = document.querySelector(".anime-name")  
//anime artist name select
Btn1.addEventListener('click', async function(){
    try {
        // before rsponse
        Btn1.disabled = true;
        Btn1.innerText = "Loading...";
        BtnAnimeName.innerText = "Updating...";
        BtnAnimeImg.src = "rolling.svg";

        // fetch the catboys anime api

        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json()
        BtnAnimeContainer.style.display = "block";
        BtnAnimeImg.src = data.url;
        BtnAnimeName.innerText = data.artist;
        Btn1.disabled = false;
        Btn1.innerText = "Get Anime";
    } catch (error) {
        console.log("Error");        
    }
})