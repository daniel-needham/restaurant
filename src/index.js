import { pageLoad } from "./pageload";
import { eggsLoad } from "./pages/egg";
import { homeLoad } from "./pages/home";
pageLoad();
homeLoad();

const navbar = document.querySelector("#navbar");
navbar.addEventListener("click", (e) => {
    console.log(e);
    const container = document.getElementById("container");
    const main = document.getElementById("main");
    if (main) container.removeChild(main);

    if (e.target.id === "home") { 
        eggsLoad();
        console.log("Is this on")
    }

    if (e.target.id === "eggs") {
        eggsLoad();
        console.log("ok")
    }

    if (e.target.id === "contact") {
        console.log("contact")
    }

});