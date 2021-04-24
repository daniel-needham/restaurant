let eggsLoad = () => {
    const footer = document.getElementById("footer");
    footer.insertAdjacentHTML("beforebegin", `<div id="main"><h1 class="full">Choose from our fully loaded eggs</h1>
    <div id="left">
    <h3>The Classic</h3>
    <p class="menu">You like a ready salted crisp and you're fed up of apologising for it.</p>
    <h3>Sriracha</h3>
    <p class="menu">The inspiration for the entire van - Sriracha flavoured sausage meat encasing a fresh free-range egg.</p>
    <h3>The Vegan</h3>
    <p class="menu"> Same as the classic, except there's no sausage meat and no egg. Wait, did I say it was the same as the classic? Nevermind, Quorn meat encasing a Beyond Meat lab grown egg.</p>
    <h3>The Really Not Vegan</h3>
    <p class="menu">Soft boiled egg encased in the finest Chorizo & Bratwurst sausage.</p>
    
    
    </div>
    
    <img class="section" id="foodvan" src="/images/scotch egg.webp"></img></div>`);
    
    console.log("egg load activated")

}

export { eggsLoad };