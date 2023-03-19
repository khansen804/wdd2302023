var options = { weekday: 'long',day: 'numeric', month: 'long', year: 'numeric'};
var today  = new Date();

document.getElementById("date").innerHTML = today.toLocaleDateString("en-US", options);
document.getElementById("modified").innerHTML = "last Updated: " + document.lastModified;

