import { pageLoad } from "./pageload";
import { homeLoad } from "./pages/home";
import { eggsLoad } from "./pages/egg";
import { contactLoad } from "./pages/contact";

pageLoad();
homeLoad()

let currentPage = "home";

function currentTab(page) {
    let currentTab = document.getElementById(page);
    currentTab.setAttribute("class", "current");
};

currentTab(currentPage);

const navbar = document.querySelector("#navbar");
navbar.addEventListener("click", (e) => {
    console.log(e);
    const sub = document.getElementById("sub");
    const main = document.getElementById("main");
    if (main) sub.removeChild(main);
    document.getElementById(currentPage).setAttribute("class", "");

    if (e.target.id === "home") {
        homeLoad();
    }

    if (e.target.id === "eggs") {
        eggsLoad();
    }

    if (e.target.id === "contact") {
        contactLoad();
    }

    currentPage = e.target.id;
    console.log(currentPage);
    currentTab(currentPage);
    
});
