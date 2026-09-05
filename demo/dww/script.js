window.addEventListener("DOMContentLoaded", () => {

    // setup adafruitIO requests
    const username = "secret";
    const activeKey = "secret";
    const IO = new AdafruitIO(username, activeKey);

    // const pages 
    const asleep = document.querySelector("#asleep");
    const awake = document.querySelector("#awake");

    // target dom element
    const favicon = document.querySelector("link");

    // a var to handle state
    let shouldListenToFeed = true;

    // a function to display "asleep" mode
    const setAsleep = () =>{
        currentState = "asleep";
        asleep.style.display = "flex";
        awake.style.display = "none";
        favicon.href = "../images/favicon-asleep.png";
        document.title = "napping time"
    }
    // a function to display "awake" mode
    const setAwake = () =>{
        currentState = "awake";
        awake.style.display = "flex";
        asleep.style.display = "none";
        favicon.href = "../images/favicon-awake.png"
        document.title = "time for a walk"

    }

    // "awake" mode functions
    const giveARandomImage = () => {
        const seed = (Math.random() + 1).toString(36).substring(4);
        return `https://picsum.photos/seed/${seed}/400/200`;
    }

    const generateACard = (location = "Lac de la thuile", imageUrl = giveARandomImage()) => {
        return`
        <div class="card flex flex-column">
            <img alt="random image from picsum" src="${imageUrl}">
            <p class="flex flex-row align-center smaller-gap"><i data-lucide="map-pin"></i> ${location}</p>
        </div>
        `
    }
    const cardsContainer = document.querySelector("#cards-container");
    for(let i = 0; i <= 2; i++){
        cardsContainer.innerHTML += generateACard();
    }
    lucide.createIcons();

    // update displayed hours and minutes every minute
    const timeDisplay = document.querySelector("#currentTime");
    const updateTimeDisplay = () => {
        const cdate = new Date();
        const h = cdate.getHours()<10 ? "0" + cdate.getHours() : cdate.getHours(); // add a 0 if needed
        const m = cdate.getMinutes()<10 ? "0" + cdate.getMinutes() : cdate.getMinutes(); // add a 0 if needed
        timeDisplay.innerHTML = `${h}:${m}`;
    }
    updateTimeDisplay();
    setInterval( ()=>{
        updateTimeDisplay();
    }, 60000);
    

    


    // start hiding "awake" state
    let currentState = "asleep";
    setAsleep();
    // setAwake();

    // repeatadily fetch data from our feed
    setInterval(()=>{
        IO.getData("button", function(data){
            const incomingDataEpoch = Number(data.json[0].created_epoch);   // date of creation of last value in the feed
            const currentEpoch = Math.floor(Date.now() / 1000);             // current date 
            const difference = currentEpoch - incomingDataEpoch;            // difference to make sure latest value is "fresh"
            if(difference <= 10){
                setAwake();
            }                   
        });
    },4000)

});