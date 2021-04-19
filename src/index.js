import { pageLoad } from "./pageload";
pageLoad();

const navbar = document.querySelector("#navbar");
navbar.addEventListener("click", (e) => { //add event listener to gameboard div
    if (e.target.id === "Home") { 
        pageLoad();
        console.log("Is this on")
    }
});