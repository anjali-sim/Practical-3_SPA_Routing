// variable for bottom to top button
const bottomToTop = document.getElementById("buttonBottomToTop");

// function is called when the scroll event is triggered
window.onscroll = function () {
  stickyNavigation();
};
// variable for taking the ID of the navigation bar
const navbar = document.getElementById("navbar");

// variable for getting offsetTop value of navbar element
const sticky = navbar.offsetTop;

// defining object for routes
const routes = {
  "/": "./src/home.html",
  "/service": "./src/service.html",
  "/about": "./src/about.html",
  "/contact": "./src/contact.html",
};

// Code for bottom to top button
window.addEventListener("scroll", () => {
  /**
   * if scrollTop is greater than 20 pixels, then display the element as block-level element on the web page
   * else does not display the element on the web page
   */
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonBottomToTop.style.display = "block";
  } else {
    buttonBottomToTop.style.display = "none";
  }
});
buttonBottomToTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/**
 * @function stickyNavigation
 * @description creates a sticky navigation bar on a webpage
 * @params none
 * @returns void
 */
function stickyNavigation() {
  /**
   * if the pageYOffset(number of pixels by which the document is scrolled vertically)
   * is greater than or equal to sticky then add sticky to classList property of navbar
   * else remove that property
   */
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

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
