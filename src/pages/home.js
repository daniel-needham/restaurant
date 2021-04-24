let homeLoad = () => {
  const footer = document.getElementById("footer");
  footer.insertAdjacentHTML("beforebegin", `<div id="main"><h1 class="full">Scotch eggs as you have never had them before!</h1>
    <div id="left"><p>Here at the Hove Egg Van, we are just crazy about Scotch Eggs. If you never had a fully loaded scotch egg then
      you are seriously missing out.
      Check out our location page, to find where you can catch us next!</p></div>
    
    <img class="section" id="foodvan" src="/images/food_van.jpg"></img></div>`);

  console.log("home load activated")
}

export { homeLoad };