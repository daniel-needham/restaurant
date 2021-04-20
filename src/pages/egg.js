let eggsLoad = () => {
    const container = document.getElementById("container")

    const footer = document.getElementById("footer");
    footer.insertAdjacentHTML("beforebegin", `<div id="main"><h1 class="full">What Eggs you want fam</h1>
    <p>Here at the Hove Egg Van, we are just crazy about Scotch Eggs. If you never had a fully loaded scotch egg then
      you are seriously missing out.
      Check out our location page, to find where you can catch us next!</p>
    
    <img class="section" id="foodvan" src="/images/food_van.jpg"></img></div>`);
    

}

export { eggsLoad };