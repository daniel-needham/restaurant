let pageLoad = () => {
    const container = document.getElementById("container")

    let header = document.createElement("header");

    header.innerHTML = `
    <img src="/images/LogoMakr-4znAZS.png" id="logo"></a>
    <nav id="navbar">
      <ul>
        <li id="Home">Home</li>
        <li id="Eggs">Eggs</li>
        <li id="Contact">Contact</li>
      </ul>
    </nav>`;

    container.appendChild(header);

    let main = document.createElement("div")
    main.setAttribute("id", "main");
    main.innerHTML = `<h1 class="full">Scotch Eggs as you've always wanted them</h1>
    <p>Here at the Hove Egg Van, we are just crazy about Scotch Eggs. If you never had a fully loaded scotch egg then
      you are seriously missing out.
      Check out our location page, to find where you can catch us next!</p>
    
    <img class="section" id="foodvan" src="/images/food_van.jpg"></img>`;

    container.appendChild(main);

    let footer = document.createElement("footer");
    footer.innerText = "made by daniel needham";

    container.appendChild(footer);
}

export { pageLoad };
