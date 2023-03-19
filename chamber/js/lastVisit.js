// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();


// ----------------

const lastVisitsDisplay = window.localStorage.setItem('lastVisit', "06/30/2019");
const lVisit = localStorage.getItem('lastVisit');

localStorage.setItem("lastVisit", today);

    // JavaScript program to illustrate
    // calculation of no. of days between two date

    // To set two dates to two variables
var date1 = new Date("06/30/2019");
var today  = new Date();

// To calculate the time difference of two dates
var Difference_In_Time = today.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)


document.getElementById("lastVisit").innerHTML = document.write("Total number of days between dates  <br>"
               + date1 + "<br> and <br>"
               + today + " is: <br> "
               + Difference_In_Days);