const homeDisplay = document.getElementById("home-count-display");
const guestDisplay = document.getElementById("guest-count-display");

let homeCount = 0;
let guestCount = 0;
function addh1() {
    console.log(1)
    homeCount  += 1;
    homeDisplay.textContent = homeCount ;
}

function addh2() {
    console.log(2);
    homeCount  += 2;
    homeDisplay.textContent = homeCount ;
}

function addh3() {
    console.log(3)
    homeCount  += 3;
    homeDisplay.textContent = homeCount ;
}


function addg1() {
    console.log(4)
    guestCount+= 1;
    guestDisplay.textContent = guestCount;
}

function addg2() {
    console.log(5)
    guestCount += 2;
    guestDisplay.textContent = guestCount;
}

function addg3() {
    console.log(6);
    guestCount += 3;
    guestDisplay.textContent = guestCount;
}