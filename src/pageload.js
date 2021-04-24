let pageLoad = () => {
    const container = document.getElementById("container")
    const subContainer = document.createElement("div");
    subContainer.setAttribute("id", "sub");

    container.appendChild(subContainer);

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

    subContainer.appendChild(header);

    

    let footer = document.createElement("footer");
    footer.setAttribute("id", "footer");
    let footerText = document.createElement("p")
    footerText.innerText = "made by daniel needham";
    footer.appendChild(footerText)
    subContainer.appendChild(footer);
}

export { pageLoad };
