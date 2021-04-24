let contactLoad = () => {
  const container = document.getElementById("container")

  const footer = document.getElementById("footer");
  footer.insertAdjacentHTML("beforebegin", `<div id="main"><h1 class="full">Never missed where we are parked again</h1>
    <div id="left"><p>Most weekend you can find us down at Hove Park. If you need to get in touch please find our social media down below, alternatively you can email me <a href="/">here.</a></p>
    <a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>

</div>
      <iframe class="section" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.451195147492!2d-0.17277628393284827!3d50.84132857953126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875855994bb93dd%3A0x1fd82390e83a2998!2sHove%20BN3%206LN!5e0!3m2!1sen!2suk!4v1619195370523!5m2!1sen!2suk" min-width="500" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>`);

  console.log("contact load activated")
}

export { contactLoad };