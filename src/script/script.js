// variable for bottom to top button
const bottomToTop = document.getElementById("buttonBottomToTop");

// Code for bottom to top button
window.onscroll = function () {
  /**
   * if scrollTop is greater than 20 pixels, then display the element as block-level element on the web page
   * else does not display the element on the web page
   */
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonBottomToTop.style.display = "block";
  } else {
    buttonBottomToTop.style.display = "none";
  }
};
buttonBottomToTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// defining object for routes
const routes = {
  "/": "./home.html",
  "/service": "./service.html",
  "/about": "./about.html",
  "/contact": "./contact.html",
};

/**
 * @function route
 * @description is called when a user clicks on a link that should trigger a new page in the application.
 * @param object
 * @returns void
 */
const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("pageContent").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
