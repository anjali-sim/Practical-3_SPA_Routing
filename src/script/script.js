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