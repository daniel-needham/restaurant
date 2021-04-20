let pageLoad = () => {
    const container = document.getElementById("container")

    let header = document.createElement("header");

    header.innerHTML = `
    <img src="/images/LogoMakr-4znAZS.png" id="logo"></a>
    <nav id="navbar">
      <ul>
        <li id="home">Home</li>
        <li id="eggs">Eggs</li>
        <li id="contact">Contact</li>
      </ul>
    </nav>`;

    container.appendChild(header);

    

    let footer = document.createElement("footer");
    footer.setAttribute("id", "footer");
    footer.innerText = "made by daniel needham";

    container.appendChild(footer);
}

export { pageLoad };
